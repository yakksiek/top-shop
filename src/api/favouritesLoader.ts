import { BASE_URL } from '../constants/api';

function favouritesLoader() {
    return fetch(`${BASE_URL}/favourites?_expand=product`);
}

export default favouritesLoader;
