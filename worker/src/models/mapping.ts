/**
 * FieldMapping type definitions for custom CSV column mapping
 */

export type StripeProductField = 
  | 'id'
  | 'name'
  | 'description'
  | 'active'
  | `metadata.${string}`
  | `image.${string}`;

export type TransformRule = 'none' | 'boolean' | 'trim' | 'lowercase';

export interface ColumnMapping {
  csvColumn: string;           // Column header in CSV file
  stripeField: StripeProductField;
  transform: TransformRule;
}

export interface FieldMapping {
  id: string;                  // UUID v4
  stripeAccountId: string;
  name: string;                // User-defined mapping name
  mappings: ColumnMapping[];
  createdAt: string;           // ISO 8601
  updatedAt: string;           // ISO 8601
}

export interface FieldMappingInput {
  name: string;
  mappings: Omit<ColumnMapping, 'transform'>[] | ColumnMapping[];
}

/**
 * Create a new field mapping
 */
export function createFieldMapping(
  stripeAccountId: string,
  input: FieldMappingInput
): FieldMapping {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    stripeAccountId,
    name: input.name,
    mappings: input.mappings.map(m => ({
      csvColumn: m.csvColumn,
      stripeField: m.stripeField,
      transform: 'transform' in m ? m.transform : 'none',
    })),
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Field mapping API response
 */
export interface FieldMappingResponse {
  id: string;
  name: string;
  mappings: ColumnMapping[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Convert internal mapping to API response
 */
export function toFieldMappingResponse(mapping: FieldMapping): FieldMappingResponse {
  return {
    id: mapping.id,
    name: mapping.name,
    mappings: mapping.mappings,
    createdAt: mapping.createdAt,
    updatedAt: mapping.updatedAt,
  };
}

/**
 * Standard Stripe product fields for mapping targets
 */
export const STRIPE_PRODUCT_FIELDS: StripeProductField[] = [
  'id',
  'name',
  'description',
  'active',
];

/**
 * Validate a mapping input
 */
export function validateMappingInput(input: FieldMappingInput): string[] {
  const errors: string[] = [];

  if (!input.name || input.name.trim().length === 0) {
    errors.push('Mapping name is required');
  }

  if (input.name && input.name.length > 100) {
    errors.push('Mapping name too long (max 100 characters)');
  }

  if (!input.mappings || input.mappings.length === 0) {
    errors.push('At least one column mapping is required');
  }

  const csvColumns = new Set<string>();
  for (const mapping of input.mappings ?? []) {
    if (!mapping.csvColumn || mapping.csvColumn.trim().length === 0) {
      errors.push('CSV column name is required for each mapping');
    }

    if (csvColumns.has(mapping.csvColumn)) {
      errors.push(`Duplicate CSV column: ${mapping.csvColumn}`);
    }
    csvColumns.add(mapping.csvColumn);

    if (!mapping.stripeField || mapping.stripeField.trim().length === 0) {
      errors.push('Stripe field is required for each mapping');
    }
  }

  return errors;
}
