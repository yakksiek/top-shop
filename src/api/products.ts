import { BASE_URL } from '../constants/api';
import type {
    GetProductsParams,
    GetProductsResponse,
    GetFilteredProductsParams,
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
