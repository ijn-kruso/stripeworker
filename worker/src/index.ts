/**
 * Worker entry point with Hono app and CORS config
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import exportRoutes from './routes/export';
import importRoutes from './routes/import';
import jobsRoutes from './routes/jobs';
import mappingsRoutes from './routes/mappings';
import storageRoutes from './routes/storage';

// Environment bindings
export interface Env {
  STRIPEWORKER_KV: KVNamespace;
  STRIPEWORKER_FILES: R2Bucket;
  STRIPE_SECRET_KEY: string;
  STRIPE_APP_SECRET: string;
}

// Create Hono app
const app = new Hono<{ Bindings: Env }>();

// CORS middleware - Allow requests from Stripe Apps iframes (null origin)
app.use('*', cors({
  origin: '*', // Stripe Apps run in sandboxed iframes with null origin
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Stripe-Signature'],
  exposeHeaders: ['Content-Type'],
  maxAge: 86400,
}));

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mount routes
app.route('/export', exportRoutes);
app.route('/import', importRoutes);
app.route('/jobs', jobsRoutes);
app.route('/mappings', mappingsRoutes);
app.route('/storage', storageRoutes);

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;
