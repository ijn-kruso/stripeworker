/**
 * Field mapping application during CSV parsing
 */

import type { FieldMapping, ColumnMapping, TransformRule } from '../models/mapping';
import type { ProductCsvRow } from '../models/product';

/**
 * Apply field mapping to transform CSV row headers
 */
export function applyMapping(
  row: ProductCsvRow,
  mapping: FieldMapping
): ProductCsvRow {
  const result: ProductCsvRow = { name: '' };

  // Apply each column mapping
  for (const colMapping of mapping.mappings) {
    const csvValue = row[colMapping.csvColumn];
    if (csvValue !== undefined) {
      const transformedValue = applyTransform(csvValue, colMapping.transform);
      result[colMapping.stripeField] = transformedValue;
    }
  }

  // Copy over any columns not covered by mapping
  for (const [key, value] of Object.entries(row)) {
    if (!mapping.mappings.some(m => m.csvColumn === key)) {
      // Check if this column is already a standard Stripe field
      if (isStandardField(key)) {
        result[key] = value;
      }
    }
  }

  // Ensure name is set
  if (!result.name && result['name'] !== '' && result['name'] !== undefined) {
    result.name = result['name'];
  }

  return result;
}

/**
 * Apply a transform rule to a value
 */
export function applyTransform(value: string, transform: TransformRule): string {
  switch (transform) {
    case 'boolean':
      return transformToBoolean(value);
    case 'trim':
      return value.trim();
    case 'lowercase':
      return value.toLowerCase();
    case 'none':
    default:
      return value;
  }
}

/**
 * Transform various boolean-like values to 'true'/'false'
 */
function transformToBoolean(value: string): string {
  const lower = value.toLowerCase().trim();
  
  if (['true', '1', 'yes', 'y', 'on', 'active', 'enabled'].includes(lower)) {
    return 'true';
  }
  if (['false', '0', 'no', 'n', 'off', 'inactive', 'disabled'].includes(lower)) {
    return 'false';
  }
  
  // Return original if not recognized
  return value;
}

/**
 * Check if a column name is a standard Stripe product field
 */
function isStandardField(column: string): boolean {
  if (['id', 'name', 'description', 'active'].includes(column)) {
    return true;
  }
  if (column.startsWith('metadata.') || column.startsWith('image.')) {
    return true;
  }
  return false;
}

/**
 * Apply mapping to multiple rows
 */
export function applyMappingToBatch(
  rows: ProductCsvRow[],
  mapping: FieldMapping
): ProductCsvRow[] {
  return rows.map(row => applyMapping(row, mapping));
}

/**
 * Detect potential column mappings based on header names
 */
export function suggestMappings(headers: string[]): Array<{
  csvColumn: string;
  suggestedField: string;
  confidence: 'high' | 'medium' | 'low';
}> {
  const suggestions: Array<{
    csvColumn: string;
    suggestedField: string;
    confidence: 'high' | 'medium' | 'low';
  }> = [];

  for (const header of headers) {
    const lower = header.toLowerCase().trim();
    const suggestion = detectMapping(lower, header);
    if (suggestion) {
      suggestions.push(suggestion);
    }
  }

  return suggestions;
}

/**
 * Detect probable mapping for a column header
 */
function detectMapping(lowerHeader: string, originalHeader: string): {
  csvColumn: string;
  suggestedField: string;
  confidence: 'high' | 'medium' | 'low';
} | null {
  // Exact matches (high confidence)
  const exactMatches: Record<string, string> = {
    'id': 'id',
    'product_id': 'id',
    'productid': 'id',
    'name': 'name',
    'product_name': 'name',
    'productname': 'name',
    'title': 'name',
    'description': 'description',
    'desc': 'description',
    'active': 'active',
    'status': 'active',
    'enabled': 'active',
  };

  if (exactMatches[lowerHeader]) {
    return {
      csvColumn: originalHeader,
      suggestedField: exactMatches[lowerHeader],
      confidence: 'high',
    };
  }

  // Fuzzy matches (medium confidence)
  if (lowerHeader.includes('name') || lowerHeader.includes('title')) {
    return {
      csvColumn: originalHeader,
      suggestedField: 'name',
      confidence: 'medium',
    };
  }

  if (lowerHeader.includes('desc')) {
    return {
      csvColumn: originalHeader,
      suggestedField: 'description',
      confidence: 'medium',
    };
  }

  if (lowerHeader.includes('active') || lowerHeader.includes('status') || lowerHeader.includes('enabled')) {
    return {
      csvColumn: originalHeader,
      suggestedField: 'active',
      confidence: 'medium',
    };
  }

  if (lowerHeader.includes('image') || lowerHeader.includes('photo') || lowerHeader.includes('picture')) {
    return {
      csvColumn: originalHeader,
      suggestedField: 'image.01',
      confidence: 'medium',
    };
  }

  // Low confidence suggestions for metadata
  if (!lowerHeader.startsWith('metadata.') && !lowerHeader.startsWith('image.')) {
    return {
      csvColumn: originalHeader,
      suggestedField: `metadata.${lowerHeader.replace(/\s+/g, '_')}`,
      confidence: 'low',
    };
  }

  return null;
}
