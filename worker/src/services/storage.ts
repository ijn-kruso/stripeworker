/**
 * R2 storage service for CSV file storage and presigned URLs
 */

export interface StorageService {
  /**
   * Generate a presigned URL for uploading a file
   */
  getUploadUrl(key: string, expiresInSeconds?: number): Promise<string>;
  
  /**
   * Generate a presigned URL for downloading a file
   */
  getDownloadUrl(key: string, expiresInSeconds?: number): Promise<string>;
  
  /**
   * Store file content directly
   */
  putFile(key: string, content: string | Uint8Array, contentType?: string): Promise<void>;
  
  /**
   * Get file content
   */
  getFile(key: string): Promise<string | null>;
  
  /**
   * Delete a file
   */
  deleteFile(key: string): Promise<void>;
  
  /**
   * Check if file exists
   */
  fileExists(key: string): Promise<boolean>;
}

const DEFAULT_UPLOAD_EXPIRY = 5 * 60; // 5 minutes
const DEFAULT_DOWNLOAD_EXPIRY = 60 * 60; // 1 hour

/**
 * Create R2-backed storage service
 * 
 * Note: R2 presigned URLs require custom domain or signed URL implementation.
 * For simplicity, we'll proxy downloads through the Worker.
 */
export function createStorageService(
  bucket: R2Bucket,
  workerUrl: string
): StorageService {
  return {
    async getUploadUrl(key: string, expiresInSeconds = DEFAULT_UPLOAD_EXPIRY): Promise<string> {
      // R2 doesn't support native presigned URLs like S3 yet
      // We'll use a signed token approach instead
      const token = await generateUploadToken(key, expiresInSeconds);
      return `${workerUrl}/storage/upload?key=${encodeURIComponent(key)}&token=${token}`;
    },

    async getDownloadUrl(key: string, expiresInSeconds = DEFAULT_DOWNLOAD_EXPIRY): Promise<string> {
      // Generate a download URL that the Worker will handle
      const token = await generateDownloadToken(key, expiresInSeconds);
      return `${workerUrl}/storage/download?key=${encodeURIComponent(key)}&token=${token}`;
    },

    async putFile(key: string, content: string | Uint8Array, contentType = 'text/csv'): Promise<void> {
      await bucket.put(key, content, {
        httpMetadata: {
          contentType,
        },
      });
    },

    async getFile(key: string): Promise<string | null> {
      const object = await bucket.get(key);
      if (!object) return null;
      return object.text();
    },

    async deleteFile(key: string): Promise<void> {
      await bucket.delete(key);
    },

    async fileExists(key: string): Promise<boolean> {
      const object = await bucket.head(key);
      return object !== null;
    },
  };
}

/**
 * Generate file key for a job
 */
export function generateFileKey(
  accountId: string,
  jobId: string,
  filename: string
): string {
  return `${accountId}/${jobId}/${filename}`;
}

/**
 * Generate upload token (simple implementation)
 * In production, use proper JWT or HMAC-based tokens
 */
async function generateUploadToken(key: string, expiresInSeconds: number): Promise<string> {
  const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const data = { key, expires, action: 'upload' };
  // Simple base64 encoding - in production, sign this with HMAC
  return btoa(JSON.stringify(data));
}

/**
 * Generate download token (simple implementation)
 */
async function generateDownloadToken(key: string, expiresInSeconds: number): Promise<string> {
  const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const data = { key, expires, action: 'download' };
  return btoa(JSON.stringify(data));
}

/**
 * Verify and decode a storage token
 */
export function verifyStorageToken(
  token: string,
  expectedAction: 'upload' | 'download'
): { key: string; valid: boolean } {
  try {
    const data = JSON.parse(atob(token)) as { key: string; expires: number; action: string };
    
    // Check expiration
    if (data.expires < Math.floor(Date.now() / 1000)) {
      return { key: data.key, valid: false };
    }
    
    // Check action
    if (data.action !== expectedAction) {
      return { key: data.key, valid: false };
    }
    
    return { key: data.key, valid: true };
  } catch {
    return { key: '', valid: false };
  }
}
