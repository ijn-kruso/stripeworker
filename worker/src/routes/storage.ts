/**
 * Storage routes - Handle file upload and download via tokens
 */

import { Hono } from 'hono';
import type { Env } from '../index';
import { verifyStorageToken } from '../services/storage';

const storageRoutes = new Hono<{ Bindings: Env }>();

/**
 * PUT /storage/upload - Handle signed file upload
 */
storageRoutes.put('/upload', async (c) => {
  try {
    const key = c.req.query('key');
    const token = c.req.query('token');
    
    if (!key || !token) {
      return c.json({ error: 'Missing key or token' }, 400);
    }

    const { valid } = verifyStorageToken(token, 'upload');
    if (!valid) {
      return c.json({ error: 'Invalid or expired token' }, 401);
    }

    const body = await c.req.arrayBuffer();
    const contentType = c.req.header('Content-Type') ?? 'text/csv';
    
    await c.env.STRIPEWORKER_FILES.put(key, body, {
      httpMetadata: {
        contentType,
      },
    });

    return c.json({ success: true });
  } catch (err) {
    console.error('Upload error:', err);
    return c.json({ error: 'Upload failed' }, 500);
  }
});

/**
 * GET /storage/download - Handle signed file download
 */
storageRoutes.get('/download', async (c) => {
  try {
    const key = c.req.query('key');
    const token = c.req.query('token');
    
    if (!key || !token) {
      return c.json({ error: 'Missing key or token' }, 400);
    }

    const { valid } = verifyStorageToken(token, 'download');
    if (!valid) {
      return c.json({ error: 'Invalid or expired token' }, 401);
    }

    const object = await c.env.STRIPEWORKER_FILES.get(key);
    if (!object) {
      return c.json({ error: 'File not found' }, 404);
    }

    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType ?? 'text/csv');
    headers.set('Content-Disposition', `attachment; filename="${getFilename(key)}"`);

    return new Response(object.body, { headers });
  } catch (err) {
    console.error('Download error:', err);
    return c.json({ error: 'Download failed' }, 500);
  }
});

/**
 * Extract filename from R2 key
 */
function getFilename(key: string): string {
  const parts = key.split('/');
  return parts[parts.length - 1] || 'download.csv';
}

export default storageRoutes;
