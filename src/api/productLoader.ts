import { LoaderFunctionArgs } from 'react-router-dom';
import { BASE_URL } from '../contants/api';

async function productLoader({ params }: LoaderFunctionArgs) {
    const { productId } = params;

    const response = await fetch(`${BASE_URL}/products/${productId}`);

    if (!response.ok) {
        throw new Response('Product not found', { status: 404 });
    }

    return response.json();
}

export default productLoader;
