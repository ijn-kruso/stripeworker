/**
 * CSV generation and parsing service with RFC 4180 compliance
 */

import type Stripe from 'stripe';
import { 
  stripeProductToCsvRow, 
  collectCsvHeaders, 
  type ProductCsvRow,
  STANDARD_COLUMNS,
} from '../models/product';

// UTF-8 BOM for Excel compatibility
const UTF8_BOM = '\ufeff';

/**
 * Escape a value for CSV (RFC 4180 compliant)
 */
function escapeCsvValue(value: string | undefined): string {
  if (value === undefined || value === null) {
    return '';
  }
  
  const str = String(value);
  
  // If the value contains quotes, commas, or newlines, wrap in quotes
  if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
    // Escape quotes by doubling them
    return `"${str.replace(/"/g, '""')}"`;
  }
  
  return str;
}

/**
 * Generate CSV content from Stripe products
 */
export function generateCsv(products: Stripe.Product[]): string {
  if (products.length === 0) {
    // Return just headers for empty export
    return UTF8_BOM + STANDARD_COLUMNS.join(',') + '\r\n';
  }

  // Collect all headers from the products
  const headers = collectCsvHeaders(products);

  // Convert products to CSV rows
  const rows: string[] = [];
  
  // Header row
  rows.push(headers.map(escapeCsvValue).join(','));

  // Data rows
  for (const product of products) {
    const csvRow = stripeProductToCsvRow(product);
    const rowValues = headers.map(header => escapeCsvValue(csvRow[header]));
    rows.push(rowValues.join(','));
  }

  return UTF8_BOM + rows.join('\r\n') + '\r\n';
}

/**
 * Parse a CSV string into rows
 */
export function parseCsv(content: string): { headers: string[]; rows: ProductCsvRow[] } {
  // Remove BOM if present
  const cleanContent = content.replace(/^\ufeff/, '');
  
  const lines = splitCsvLines(cleanContent);
  
  if (lines.length === 0) {
    return { headers: [], rows: [] };
  }

  // Parse header
  const headers = parseCsvLine(lines[0]);
  
  // Parse data rows
  const rows: ProductCsvRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '') continue;
    
    const values = parseCsvLine(line);
    const row: ProductCsvRow = { name: '' };
    
    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      const value = values[j] ?? '';
      row[header] = value;
    }
    
    // Ensure name is set
    if (!row.name && row['name'] !== undefined) {
      row.name = row['name'];
    }
    
    rows.push(row);
  }

  return { headers, rows };
}

/**
 * Split CSV content into lines, handling quoted values with embedded newlines
 */
function splitCsvLines(content: string): string[] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        currentLine += '""';
        i++;
      } else {
        inQuotes = !inQuotes;
        currentLine += char;
      }
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (currentLine.trim()) {
        lines.push(currentLine);
      }
      currentLine = '';
      // Skip \r\n as a single newline
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
    } else {
      currentLine += char;
    }
  }

  // Add final line if present
  if (currentLine.trim()) {
    lines.push(currentLine);
  }

  return lines;
}

/**
 * Parse a single CSV line into values
 */
function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (!inQuotes) {
        inQuotes = true;
      } else if (nextChar === '"') {
        // Escaped quote
        current += '"';
        i++;
      } else {
        inQuotes = false;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}

/**
 * Generate error CSV from failed rows
 */
export function generateErrorCsv(
  errors: Array<{ row: number; message: string; data?: ProductCsvRow }>
): string {
  const headers = ['row', 'error', ...STANDARD_COLUMNS];
  const rows: string[] = [];
  
  // Header row
  rows.push(headers.map(escapeCsvValue).join(','));
  
  // Error rows
  for (const error of errors) {
    const rowData: Record<string, string> = {
      row: String(error.row),
      error: error.message,
    };
    
    // Include original data if available
    if (error.data) {
      for (const col of STANDARD_COLUMNS) {
        rowData[col] = error.data[col] ?? '';
      }
    }
    
    const rowValues = headers.map(h => escapeCsvValue(rowData[h]));
    rows.push(rowValues.join(','));
  }
  
  return UTF8_BOM + rows.join('\r\n') + '\r\n';
}

/**
 * Count rows in CSV content (excluding header)
 */
export function countCsvRows(content: string): number {
  const lines = splitCsvLines(content);
  return Math.max(0, lines.length - 1); // Subtract header
}

/**
 * Extract specific rows from CSV content for chunked processing
 */
export function extractCsvRows(
  content: string,
  startRow: number, // 1-indexed (after header)
  count: number
): { headers: string[]; rows: ProductCsvRow[]; hasMore: boolean } {
  const { headers, rows } = parseCsv(content);
  
  const startIndex = startRow - 1; // Convert to 0-indexed
  const endIndex = startIndex + count;
  
  return {
    headers,
    rows: rows.slice(startIndex, endIndex),
    hasMore: endIndex < rows.length,
  };
}
