import { ActionFunctionArgs } from 'react-router-dom';
import { BASE_URL } from '../contants/api';

function addProductToFavourites({ params }: ActionFunctionArgs) {
    const { productId } = params;

    return fetch(`${BASE_URL}/favourites`, {
        method: 'POST',
        body: JSON.stringify({
            productId: Number(productId),
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export default addProductToFavourites;
