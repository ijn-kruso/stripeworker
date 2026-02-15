/**
 * Stripe client wrapper with rate limit handling
 */

import Stripe from 'stripe';

export interface StripeClientOptions {
  secretKey: string;
  accountId?: string; // For making requests on behalf of a connected account
}

/**
 * Create a Stripe client configured for the given account
 */
export function createStripeClient(options: StripeClientOptions): Stripe {
  return new Stripe(options.secretKey, {
    apiVersion: '2023-10-16',
    typescript: true,
  });
}

/**
 * Default rate limit configuration
 */
const RATE_LIMIT_CONFIG = {
  maxRetries: 5,
  initialDelayMs: 1000,
  maxDelayMs: 30000,
  backoffMultiplier: 2,
};

/**
 * Sleep for a given duration
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Execute a Stripe API call with automatic retry on rate limit errors
 */
export async function withRateLimitRetry<T>(
  operation: () => Promise<T>,
  config = RATE_LIMIT_CONFIG
): Promise<T> {
  let lastError: unknown;
  let delay = config.initialDelayMs;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await operation();
    } catch (err) {
      lastError = err;

      // Check if it's a rate limit error
      if (err instanceof Stripe.errors.StripeRateLimitError) {
        if (attempt < config.maxRetries) {
          console.log(`Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${config.maxRetries})`);
          await sleep(delay);
          delay = Math.min(delay * config.backoffMultiplier, config.maxDelayMs);
          continue;
        }
      }

      // Rethrow non-rate-limit errors immediately
      throw err;
    }
  }

  throw lastError;
}

/**
 * Paginate through all Stripe products
 */
export async function* paginateProducts(
  stripe: Stripe,
  accountId: string,
  options: { limit?: number; startingAfter?: string } = {}
): AsyncGenerator<Stripe.Product, void, unknown> {
  const limit = options.limit ?? 100;
  let startingAfter = options.startingAfter;
  let hasMore = true;

  while (hasMore) {
    const listParams: Stripe.ProductListParams = {
      limit,
      expand: ['data.default_price'],
    };
    if (startingAfter !== undefined) {
      listParams.starting_after = startingAfter;
    }
    
    const response = await withRateLimitRetry(() =>
      stripe.products.list(listParams, { stripeAccount: accountId })
    );

    for (const product of response.data) {
      yield product;
    }

    hasMore = response.has_more;
    if (hasMore && response.data.length > 0) {
      startingAfter = response.data[response.data.length - 1].id;
    }
  }
}

/**
 * Fetch products in batches with cursor support
 */
export async function fetchProductsBatch(
  stripe: Stripe,
  accountId: string,
  options: { limit?: number; startingAfter?: string } = {}
): Promise<{ products: Stripe.Product[]; nextCursor?: string; hasMore: boolean }> {
  const limit = options.limit ?? 100;

  const listParams: Stripe.ProductListParams = { limit };
  if (options.startingAfter !== undefined) {
    listParams.starting_after = options.startingAfter;
  }

  const response = await withRateLimitRetry(() =>
    stripe.products.list(listParams, { stripeAccount: accountId })
  );

  const result: { products: Stripe.Product[]; nextCursor?: string; hasMore: boolean } = {
    products: response.data,
    hasMore: response.has_more,
  };

  if (response.has_more && response.data.length > 0) {
    result.nextCursor = response.data[response.data.length - 1].id;
  }

  return result;
}

/**
 * Create a new product
 */
export async function createProduct(
  stripe: Stripe,
  accountId: string,
  data: Stripe.ProductCreateParams
): Promise<Stripe.Product> {
  return withRateLimitRetry(() =>
    stripe.products.create(data, { stripeAccount: accountId })
  );
}

/**
 * Update an existing product
 */
export async function updateProduct(
  stripe: Stripe,
  accountId: string,
  productId: string,
  data: Stripe.ProductUpdateParams
): Promise<Stripe.Product> {
  return withRateLimitRetry(() =>
    stripe.products.update(productId, data, { stripeAccount: accountId })
  );
}

/**
 * Check if a product exists
 */
export async function productExists(
  stripe: Stripe,
  accountId: string,
  productId: string
): Promise<boolean> {
  try {
    await withRateLimitRetry(() =>
      stripe.products.retrieve(productId, { stripeAccount: accountId })
    );
    return true;
  } catch (err) {
    if (err instanceof Stripe.errors.StripeInvalidRequestError && err.code === 'resource_missing') {
      return false;
    }
    throw err;
  }
}
