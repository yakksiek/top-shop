import type { Product, LoaderProductData } from '../types/Product';
import type { Gender } from '../types/Gender';
import type { Category } from '../types/Category';
import type { Subcategory } from '../types/Subcategory';

// GET /products?gender=X
export interface GetProductsParams {
    gender: Gender;
}
export type GetProductsResponse = Product[];

// GET /products?gender=X&[filter params]
export interface GetFilteredProductsParams {
    gender: Gender;
    query: string;
    filters?: Record<string, string>;
    or?: string[];
}
// Response shape matches GetProductsResponse — reuse it.

// GET /products/:productId
export interface GetProductParams {
    productId: string;
}
export type GetProductResponse = Product;

// GET /products?gender=X&category=Y&[subcategory]&_limit&_page
export interface GetProductListParams {
    gender: Gender;
    category: Category;
    subcategory?: Subcategory;
    page: number;
    limit: number;
}
export type GetProductListResponse = Product[];
// Total count is served via the X-Total-Count response header, not the body.
// Phase 3's fetchJson<T> will need to surface headers separately.

// Enriched fetcher return — combines body with pagination metadata
// derived from the X-Total-Count header.
export interface ProductListPage {
    products: Product[];
    numberOfPages: number;
}

// GET /:gender
export interface GetMainPageParams {
    gender: Gender;
}
export type GetMainPageResponse = LoaderProductData;
