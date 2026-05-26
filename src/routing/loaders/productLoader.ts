import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchProduct } from '../../api/products';

async function productLoader({ params }: LoaderFunctionArgs) {
    const { productId } = params;

    try {
        return await fetchProduct({ productId: productId! });
    } catch {
        throw new Response('Product not found', { status: 404 });
    }
}

export default productLoader;
