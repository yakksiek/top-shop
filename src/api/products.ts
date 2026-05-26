import { BASE_URL } from '../constants/api';
import type {
    GetProductsParams,
    GetProductsResponse,
    GetFilteredProductsParams,
    GetProductParams,
    GetProductResponse,
    GetProductListParams,
    GetMainPageParams,
    GetMainPageResponse,
    ProductListPage,
} from './types';

export async function fetchProducts({ gender }: GetProductsParams): Promise<GetProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/?gender=${gender}`);
    if (!response.ok) {
        throw new Error('Failed to load products');
    }
    return response.json();
}

export async function fetchFilteredProducts({
    gender,
    query,
    filters,
    or,
}: GetFilteredProductsParams): Promise<GetProductsResponse> {
    const defaultFilters = {
        description_like: query,
        ...filters,
    };

    const defaultOr = or || [`subcategory_like=${query}`, `productName_like=${query}`];

    const queryParams = new URLSearchParams({
        gender,
        ...defaultFilters,
    });

    queryParams.set('or', defaultOr.join(','));

    const response = await fetch(`${BASE_URL}/products/?${queryParams.toString()}`);
    if (!response.ok) {
        throw new Error('Failed to load products');
    }
    return response.json();
}

export async function fetchProduct({
    productId,
}: GetProductParams): Promise<GetProductResponse> {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
        throw new Error('Failed to load product');
    }
    return response.json();
}

export async function fetchProductList({
    gender,
    category,
    subcategory,
    page,
    limit,
}: GetProductListParams): Promise<ProductListPage> {
    const queryParams = new URLSearchParams({
        gender,
        category,
        _page: String(page),
        _limit: String(limit),
    });
    if (subcategory) {
        queryParams.set('subcategory', subcategory);
    }

    const response = await fetch(`${BASE_URL}/products/?${queryParams.toString()}`);
    if (!response.ok) {
        throw new Error('Failed to load products');
    }

    const totalItemsNumber = Number(response.headers.get('X-Total-Count'));
    const numberOfPages = Math.ceil(totalItemsNumber / limit);
    const products = await response.json();

    return { products, numberOfPages };
}

export async function fetchMainPageData({
    gender,
}: GetMainPageParams): Promise<GetMainPageResponse> {
    const response = await fetch(`${BASE_URL}/${gender}`);
    if (!response.ok) {
        throw new Error('Failed to load page data');
    }
    return response.json();
}
