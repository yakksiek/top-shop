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
