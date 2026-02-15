/**
 * Product CSV row type definitions
 */

import type Stripe from 'stripe';

/**
 * CSV representation of a product for import/export
 */
export interface ProductCsvRow {
  id?: string;                   // Optional - blank for create, present for update
  name: string;                  // Required
  description?: string;
  active?: string;               // "true"/"false" or "1"/"0"
  tax_code?: string;             // Stripe tax code (e.g., "txcd_99999999")
  [key: string]: string | undefined;  // Dynamic metadata.* and image.* columns
}

/**
 * Standard CSV column headers
 */
export const STANDARD_COLUMNS = ['id', 'name', 'description', 'active', 'tax_code'] as const;

/**
 * Metadata column prefix
 */
export const METADATA_PREFIX = 'metadata.';

/**
 * Image column prefix
 */
export const IMAGE_PREFIX = 'image.';

/**
 * Maximum number of images per product (Stripe limit)
 */
export const MAX_IMAGES = 8;

/**
 * Stripe Product fields we care about
 */
export interface ProductData {
  id?: string;
  name: string;
  description?: string;
  active?: boolean;
  tax_code?: string;
  metadata?: Record<string, string>;
  images?: string[];
}

/**
 * Convert Stripe Product to CSV row
 */
export function stripeProductToCsvRow(product: Stripe.Product): ProductCsvRow {
  const row: ProductCsvRow = {
    id: product.id,
    name: product.name,
    description: product.description ?? '',
    active: product.active ? 'true' : 'false',
    tax_code: typeof product.tax_code === 'string' ? product.tax_code : (product.tax_code?.id ?? ''),
  };

  // Add metadata columns
  if (product.metadata) {
    for (const [key, value] of Object.entries(product.metadata)) {
      row[`${METADATA_PREFIX}${key}`] = value;
    }
  }

  // Add image columns
  if (product.images) {
    product.images.forEach((url, index) => {
      const imageNum = String(index + 1).padStart(2, '0');
      row[`${IMAGE_PREFIX}${imageNum}`] = url;
    });
  }

  return row;
}

/**
 * Convert CSV row to Stripe Product create/update params
 */
export function csvRowToProductData(row: ProductCsvRow): ProductData {
  const data: ProductData = {
    name: row.name,
  };

  if (row.id) {
    data.id = row.id;
  }

  if (row.description !== undefined && row.description !== '') {
    data.description = row.description;
  }

  if (row.active !== undefined && row.active !== '') {
    data.active = parseBoolean(row.active);
  }

  if (row.tax_code !== undefined && row.tax_code !== '') {
    data.tax_code = row.tax_code;
  }

  // Extract metadata columns
  const metadata: Record<string, string> = {};
  for (const [key, value] of Object.entries(row)) {
    if (key.startsWith(METADATA_PREFIX) && value !== undefined && value !== '') {
      const metaKey = key.slice(METADATA_PREFIX.length);
      metadata[metaKey] = value;
    }
  }
  if (Object.keys(metadata).length > 0) {
    data.metadata = metadata;
  }

  // Extract image columns (sorted by number)
  const images: string[] = [];
  const imageColumns = Object.keys(row)
    .filter(k => k.startsWith(IMAGE_PREFIX))
    .sort();
  
  for (const col of imageColumns) {
    const value = row[col];
    if (value !== undefined && value !== '') {
      images.push(value);
    }
  }
  if (images.length > 0) {
    data.images = images.slice(0, MAX_IMAGES);
  }

  return data;
}

/**
 * Parse boolean-like string values
 */
function parseBoolean(value: string): boolean {
  const lower = value.toLowerCase().trim();
  return lower === 'true' || lower === '1' || lower === 'yes';
}

/**
 * Collect all unique column headers from products for export
 */
export function collectCsvHeaders(products: Stripe.Product[]): string[] {
  const headers = new Set<string>(STANDARD_COLUMNS);

  for (const product of products) {
    // Collect metadata keys
    if (product.metadata) {
      for (const key of Object.keys(product.metadata)) {
        headers.add(`${METADATA_PREFIX}${key}`);
      }
    }
    // Collect image columns
    if (product.images) {
      product.images.forEach((_, index) => {
        const imageNum = String(index + 1).padStart(2, '0');
        headers.add(`${IMAGE_PREFIX}${imageNum}`);
      });
    }
  }

  // Sort: standard columns first, then metadata, then images
  return Array.from(headers).sort((a, b) => {
    const aStd = STANDARD_COLUMNS.indexOf(a as typeof STANDARD_COLUMNS[number]);
    const bStd = STANDARD_COLUMNS.indexOf(b as typeof STANDARD_COLUMNS[number]);
    
    if (aStd !== -1 && bStd !== -1) return aStd - bStd;
    if (aStd !== -1) return -1;
    if (bStd !== -1) return 1;
    
    const aIsMeta = a.startsWith(METADATA_PREFIX);
    const bIsMeta = b.startsWith(METADATA_PREFIX);
    
    if (aIsMeta && !bIsMeta) return -1;
    if (!aIsMeta && bIsMeta) return 1;
    
    return a.localeCompare(b);
  });
}
