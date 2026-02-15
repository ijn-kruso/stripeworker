/**
 * Stripe signature verification middleware for Stripe Apps
 */

import type { Context, Next } from 'hono';
import Stripe from 'stripe';

export interface AuthContext {
  userId: string;
  accountId: string;
}

/**
 * Middleware to verify Stripe Apps signed requests
 * 
 * Stripe Apps UI extensions sign requests using fetchStripeSignature().
 * We verify using the app's signing secret.
 */
export function stripeSignatureMiddleware() {
  return async (c: Context, next: Next): Promise<Response | void> => {
    const appSecret = c.env.STRIPE_APP_SECRET;
    
    if (!appSecret) {
      console.error('STRIPE_APP_SECRET not configured');
      return c.json({ error: 'Server configuration error' }, 500);
    }

    const signature = c.req.header('Stripe-Signature');
    
    if (!signature) {
      return c.json({ error: 'Missing Stripe-Signature header' }, 401);
    }

    try {
      // Get the raw body for signature verification
      const body = await c.req.text();
      
      // Verify signature using Stripe SDK
      const stripe = new Stripe(c.env.STRIPE_SECRET_KEY);
      
      // The signature is verified against the raw body
      stripe.webhooks.constructEvent(body, signature, appSecret);
      
      // Parse JSON from the verified body
      const data = JSON.parse(body) as { user_id?: string; account_id?: string };
      
      if (!data.user_id || !data.account_id) {
        return c.json({ error: 'Missing user_id or account_id in request body' }, 400);
      }

      // Set auth context for downstream handlers
      c.set('auth', {
        userId: data.user_id,
        accountId: data.account_id,
      } satisfies AuthContext);

      // Store parsed body for handlers
      c.set('body', data);

      await next();
    } catch (err) {
      if (err instanceof Stripe.errors.StripeSignatureVerificationError) {
        return c.json({ error: 'Invalid signature' }, 401);
      }
      console.error('Auth middleware error:', err);
      return c.json({ error: 'Authentication failed' }, 401);
    }
  };
}

/**
 * Simpler signature verification for development/testing
 * Uses HMAC-SHA256 verification
 */
export function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    // Parse the signature header
    const parts = signature.split(',');
    const sigParts: Record<string, string> = {};
    
    for (const part of parts) {
      const [key, value] = part.split('=');
      if (key && value) {
        sigParts[key] = value;
      }
    }

    const timestamp = sigParts['t'];
    const sig = sigParts['v1'];

    if (!timestamp || !sig) {
      return false;
    }

    // Verify timestamp is within tolerance (5 minutes)
    const timestampMs = parseInt(timestamp, 10) * 1000;
    const now = Date.now();
    if (Math.abs(now - timestampMs) > 5 * 60 * 1000) {
      return false;
    }

    // Compute expected signature
    const signedPayload = `${timestamp}.${payload}`;
    const expectedSig = computeHmacSha256(signedPayload, secret);

    return secureCompare(sig, expectedSig);
  } catch {
    return false;
  }
}

/**
 * Compute HMAC-SHA256 signature
 */
export async function computeHmacSha256Async(data: string, key: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const dataBuffer = encoder.encode(data);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, dataBuffer);
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Synchronous HMAC computation placeholder (use async in Workers)
 */
function computeHmacSha256(_data: string, _key: string): string {
  // In production, use the async version
  throw new Error('Use computeHmacSha256Async in Workers environment');
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Extract auth context from request
 */
export function getAuthContext(c: Context): AuthContext {
  const auth = c.get('auth') as AuthContext | undefined;
  if (!auth) {
    throw new Error('Auth context not set - ensure stripeSignatureMiddleware is used');
  }
  return auth;
}

/**
 * Get the parsed request body
 */
export function getRequestBody<T>(c: Context): T {
  return c.get('body') as T;
}
