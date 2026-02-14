/**
 * Signed API client helper with fetchStripeSignature for Stripe Apps UI
 */

import { fetchStripeSignature } from '@stripe/ui-extension-sdk/utils';

// Backend API base URL - configure based on environment
const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8787'
  : 'https://stripeworker.workers.dev'; // Replace with actual deployment URL

export interface SignedRequestBody {
  user_id: string;
  account_id: string;
}

export interface ApiClientOptions {
  userId: string;
  accountId: string;
}

/**
 * Create an API client with automatic signature generation
 */
export function createApiClient(options: ApiClientOptions) {
  const baseBody: SignedRequestBody = {
    user_id: options.userId,
    account_id: options.accountId,
  };

  return {
    /**
     * Make a signed POST request
     */
    async post<T>(path: string, body: Record<string, unknown> = {}): Promise<T> {
      const requestBody = { ...baseBody, ...body };
      const signature = await fetchStripeSignature();

      const response = await fetch(`${API_BASE_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Stripe-Signature': signature,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new ApiError(response.status, (error as { error?: string }).error ?? 'Request failed');
      }

      return response.json() as Promise<T>;
    },

    /**
     * Make a signed GET request (signature in header, account in query)
     */
    async get<T>(path: string, params: Record<string, string> = {}): Promise<T> {
      const signature = await fetchStripeSignature();
      const searchParams = new URLSearchParams({
        ...params,
        account_id: options.accountId,
      });

      const response = await fetch(`${API_BASE_URL}${path}?${searchParams}`, {
        method: 'GET',
        headers: {
          'Stripe-Signature': signature,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new ApiError(response.status, (error as { error?: string }).error ?? 'Request failed');
      }

      return response.json() as Promise<T>;
    },

    /**
     * Make a signed DELETE request
     */
    async delete<T>(path: string): Promise<T> {
      const signature = await fetchStripeSignature();

      const response = await fetch(`${API_BASE_URL}${path}?account_id=${options.accountId}`, {
        method: 'DELETE',
        headers: {
          'Stripe-Signature': signature,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new ApiError(response.status, (error as { error?: string }).error ?? 'Request failed');
      }

      return response.json() as Promise<T>;
    },

    /**
     * Upload a file to a presigned URL
     */
    async uploadFile(uploadUrl: string, file: File): Promise<void> {
      const response = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type || 'text/csv',
        },
        body: file,
      });

      if (!response.ok) {
        throw new ApiError(response.status, 'File upload failed');
      }
    },
  };
}

/**
 * API error class
 */
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Job types for API responses
export interface Job {
  id: string;
  type: 'import' | 'export';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  totalRows: number;
  processedRows: number;
  createdCount?: number;
  updatedCount?: number;
  skippedCount?: number;
  errorCount: number;
  dryRun?: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface UploadUrlResponse {
  uploadUrl: string;
  jobId: string;
}

export interface DownloadUrlResponse {
  downloadUrl: string;
}

export interface ErrorsResponse {
  downloadUrl: string;
  errorCount: number;
}

export interface JobListResponse {
  jobs: Job[];
}
