import { LoaderFunctionArgs } from 'react-router-dom';
import { BASE_URL } from '../contants/api';

function productLoader({ params }: LoaderFunctionArgs) {
    const { productId } = params;

    return fetch(`${BASE_URL}/products/${productId}`);
}

export default productLoader;
