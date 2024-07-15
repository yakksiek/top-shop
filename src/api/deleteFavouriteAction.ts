import { ActionFunctionArgs } from 'react-router-dom';
import { BASE_URL } from '../contants/api';

function deleteFavouriteAction({ params }: ActionFunctionArgs) {
    return fetch(`${BASE_URL}/favourites/${params.favouritesId}`, { method: 'DELETE' });
}

export default deleteFavouriteAction;
