/**
 * Field mappings routes - CRUD for custom CSV column mappings
 */

import { Hono } from 'hono';
import type { Env } from '../index';
import { 
  createFieldMapping, 
  toFieldMappingResponse, 
  validateMappingInput,
  type FieldMapping,
  type FieldMappingInput,
} from '../models/mapping';

const mappingsRoutes = new Hono<{ Bindings: Env }>();

const MAPPING_KEY_PREFIX = 'mapping:';

/**
 * GET /mappings - List saved field mappings for account
 */
mappingsRoutes.get('/', async (c) => {
  try {
    const accountId = c.req.query('account_id');
    
    if (!accountId) {
      return c.json({ error: 'Missing account_id query parameter' }, 400);
    }

    // Get mapping IDs for this account
    const indexKey = `account-mappings:${accountId}`;
    const mappingIds = await c.env.STRIPEWORKER_KV.get(indexKey, 'json') as string[] | null;
    
    if (!mappingIds || mappingIds.length === 0) {
      return c.json({ mappings: [] });
    }

    // Fetch all mappings
    const mappings: FieldMapping[] = [];
    for (const id of mappingIds) {
      const key = `${MAPPING_KEY_PREFIX}${id}`;
      const mapping = await c.env.STRIPEWORKER_KV.get(key, 'json') as FieldMapping | null;
      if (mapping) {
        mappings.push(mapping);
      }
    }

    return c.json({
      mappings: mappings.map(toFieldMappingResponse),
    });
  } catch (err) {
    console.error('List mappings error:', err);
    return c.json({ error: 'Failed to list mappings' }, 500);
  }
});

/**
 * POST /mappings - Create a new field mapping
 */
mappingsRoutes.post('/', async (c) => {
  try {
    const body = await c.req.json<{ 
      user_id: string; 
      account_id: string; 
    } & FieldMappingInput>();
    
    const { account_id: accountId, name, mappings: columnMappings } = body;
    
    if (!accountId) {
      return c.json({ error: 'Missing account_id' }, 400);
    }

    const input: FieldMappingInput = { name, mappings: columnMappings ?? [] };
    
    // Validate input
    const errors = validateMappingInput(input);
    if (errors.length > 0) {
      return c.json({ error: errors.join(', ') }, 400);
    }

    // Create mapping
    const mapping = createFieldMapping(accountId, input);
    
    // Save to KV
    const key = `${MAPPING_KEY_PREFIX}${mapping.id}`;
    await c.env.STRIPEWORKER_KV.put(key, JSON.stringify(mapping));

    // Update account index
    const indexKey = `account-mappings:${accountId}`;
    let mappingIds = await c.env.STRIPEWORKER_KV.get(indexKey, 'json') as string[] | null;
    mappingIds = mappingIds ?? [];
    mappingIds.unshift(mapping.id);
    await c.env.STRIPEWORKER_KV.put(indexKey, JSON.stringify(mappingIds));

    return c.json(toFieldMappingResponse(mapping), 201);
  } catch (err) {
    console.error('Create mapping error:', err);
    return c.json({ error: 'Failed to create mapping' }, 500);
  }
});

/**
 * GET /mappings/:mappingId - Get a specific field mapping
 */
mappingsRoutes.get('/:mappingId', async (c) => {
  try {
    const mappingId = c.req.param('mappingId');
    const key = `${MAPPING_KEY_PREFIX}${mappingId}`;
    
    const mapping = await c.env.STRIPEWORKER_KV.get(key, 'json') as FieldMapping | null;
    
    if (!mapping) {
      return c.json({ error: 'Mapping not found' }, 404);
    }
    
    return c.json(toFieldMappingResponse(mapping));
  } catch (err) {
    console.error('Get mapping error:', err);
    return c.json({ error: 'Failed to get mapping' }, 500);
  }
});

/**
 * PUT /mappings/:mappingId - Update a field mapping
 */
mappingsRoutes.put('/:mappingId', async (c) => {
  try {
    const mappingId = c.req.param('mappingId');
    const body = await c.req.json<FieldMappingInput>();
    const key = `${MAPPING_KEY_PREFIX}${mappingId}`;
    
    const existing = await c.env.STRIPEWORKER_KV.get(key, 'json') as FieldMapping | null;
    
    if (!existing) {
      return c.json({ error: 'Mapping not found' }, 404);
    }

    // Validate input
    const errors = validateMappingInput(body);
    if (errors.length > 0) {
      return c.json({ error: errors.join(', ') }, 400);
    }

    // Update mapping
    const updated: FieldMapping = {
      ...existing,
      name: body.name,
      mappings: body.mappings.map(m => ({
        csvColumn: m.csvColumn,
        stripeField: m.stripeField,
        transform: 'transform' in m ? m.transform : 'none',
      })),
      updatedAt: new Date().toISOString(),
    };

    await c.env.STRIPEWORKER_KV.put(key, JSON.stringify(updated));
    
    return c.json(toFieldMappingResponse(updated));
  } catch (err) {
    console.error('Update mapping error:', err);
    return c.json({ error: 'Failed to update mapping' }, 500);
  }
});

/**
 * DELETE /mappings/:mappingId - Delete a field mapping
 */
mappingsRoutes.delete('/:mappingId', async (c) => {
  try {
    const mappingId = c.req.param('mappingId');
    const key = `${MAPPING_KEY_PREFIX}${mappingId}`;
    
    const mapping = await c.env.STRIPEWORKER_KV.get(key, 'json') as FieldMapping | null;
    
    if (!mapping) {
      return c.json({ error: 'Mapping not found' }, 404);
    }

    // Delete from KV
    await c.env.STRIPEWORKER_KV.delete(key);

    // Remove from account index
    const indexKey = `account-mappings:${mapping.stripeAccountId}`;
    let mappingIds = await c.env.STRIPEWORKER_KV.get(indexKey, 'json') as string[] | null;
    if (mappingIds) {
      mappingIds = mappingIds.filter(id => id !== mappingId);
      await c.env.STRIPEWORKER_KV.put(indexKey, JSON.stringify(mappingIds));
    }

    return c.body(null, 204);
  } catch (err) {
    console.error('Delete mapping error:', err);
    return c.json({ error: 'Failed to delete mapping' }, 500);
  }
});

export default mappingsRoutes;
