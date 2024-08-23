import { BASE_URL } from '../contants/api';

interface FetchProductsProps {
    gender: string;
}

export async function fetchProducts({ gender }: FetchProductsProps) {
    const response = await fetch(`${BASE_URL}/products/?gender=${gender}`);
    if (!response.ok) {
        throw new Error('Failed to load products');
    }
    const data = await response.json();
    return data;
}

interface FetchFilteredProductsProps {
    gender: string;
    query: string;
    filters?: Record<string, string>;
    or?: string[];
}

export async function fetchFilteredProducts({ gender, query, filters, or }: FetchFilteredProductsProps) {
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
    const data = await response.json();
    return data;
}
