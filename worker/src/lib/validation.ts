/**
 * CSV row validation with skip-and-continue strategy
 */

import type { ProductCsvRow, ProductData } from '../models/product';

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  data?: ProductData;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: string;
}

/**
 * Validate a CSV row for import
 */
export function validateCsvRow(row: ProductCsvRow, _rowNumber: number): ValidationResult {
  const errors: ValidationError[] = [];
  
  // Validate required fields
  if (!row.name || row.name.trim() === '') {
    errors.push({
      field: 'name',
      message: 'Name is required',
    });
  }
  
  // Validate ID format if present
  if (row.id && row.id.trim() !== '') {
    if (!row.id.startsWith('prod_')) {
      errors.push({
        field: 'id',
        message: 'Invalid product ID format. Must start with "prod_"',
        value: row.id,
      });
    }
  }
  
  // Validate active field
  if (row.active !== undefined && row.active !== '') {
    const active = row.active.toLowerCase().trim();
    if (!['true', 'false', '1', '0', 'yes', 'no'].includes(active)) {
      errors.push({
        field: 'active',
        message: 'Active must be true/false, 1/0, or yes/no',
        value: row.active,
      });
    }
  }
  
  // Validate metadata fields
  for (const [key, value] of Object.entries(row)) {
    if (key.startsWith('metadata.')) {
      const metaKey = key.slice('metadata.'.length);
      
      if (metaKey.length > 40) {
        errors.push({
          field: key,
          message: 'Metadata key too long (max 40 characters)',
          value: metaKey,
        });
      }
      
      if (value && value.length > 500) {
        errors.push({
          field: key,
          message: 'Metadata value too long (max 500 characters)',
          value: value.substring(0, 50) + '...',
        });
      }
    }
  }
  
  // Validate image fields
  for (const [key, value] of Object.entries(row)) {
    if (key.startsWith('image.') && value && value.trim() !== '') {
      if (!isValidUrl(value)) {
        errors.push({
          field: key,
          message: 'Invalid image URL',
          value: value,
        });
      }
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  // Convert to ProductData
  const data = csvRowToProductData(row);
  return { valid: true, errors: [], data };
}

/**
 * Convert validated CSV row to ProductData
 */
function csvRowToProductData(row: ProductCsvRow): ProductData {
  const data: ProductData = {
    name: row.name.trim(),
  };
  
  if (row.id && row.id.trim() !== '') {
    data.id = row.id.trim();
  }
  
  if (row.description !== undefined && row.description.trim() !== '') {
    data.description = row.description.trim();
  }
  
  if (row.active !== undefined && row.active.trim() !== '') {
    const active = row.active.toLowerCase().trim();
    data.active = ['true', '1', 'yes'].includes(active);
  }
  
  if (row.tax_code !== undefined && row.tax_code.trim() !== '') {
    data.tax_code = row.tax_code.trim();
  }
  
  // Extract metadata
  const metadata: Record<string, string> = {};
  for (const [key, value] of Object.entries(row)) {
    if (key.startsWith('metadata.') && value !== undefined && value.trim() !== '') {
      const metaKey = key.slice('metadata.'.length);
      metadata[metaKey] = value.trim();
    }
  }
  if (Object.keys(metadata).length > 0) {
    data.metadata = metadata;
  }
  
  // Extract images
  const images: string[] = [];
  const imageKeys = Object.keys(row)
    .filter(k => k.startsWith('image.'))
    .sort();
  
  for (const key of imageKeys) {
    const value = row[key];
    if (value !== undefined && value.trim() !== '') {
      images.push(value.trim());
    }
  }
  if (images.length > 0) {
    data.images = images.slice(0, 8); // Stripe max 8 images
  }
  
  return data;
}

/**
 * Check if a string is a valid URL
 */
function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Batch validation results
 */
export interface BatchValidationResult {
  validRows: Array<{ rowNumber: number; data: ProductData }>;
  invalidRows: Array<{ rowNumber: number; row: ProductCsvRow; errors: ValidationError[] }>;
}

/**
 * Validate a batch of CSV rows
 */
export function validateBatch(
  rows: ProductCsvRow[],
  startRowNumber: number
): BatchValidationResult {
  const validRows: Array<{ rowNumber: number; data: ProductData }> = [];
  const invalidRows: Array<{ rowNumber: number; row: ProductCsvRow; errors: ValidationError[] }> = [];
  
  for (let i = 0; i < rows.length; i++) {
    const rowNumber = startRowNumber + i;
    const result = validateCsvRow(rows[i], rowNumber);
    
    if (result.valid && result.data) {
      validRows.push({ rowNumber, data: result.data });
    } else {
      invalidRows.push({ rowNumber, row: rows[i], errors: result.errors });
    }
  }
  
  return { validRows, invalidRows };
}
