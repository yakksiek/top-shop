import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BASE_URL } from '../contants/api';
import * as t from '../types';

function productListLoader({ params }: LoaderFunctionArgs<{ gender: string; category: string }>) {
    const { gender, category } = params;

    const isGenderValid = t.validGenders.includes(gender as t.GenderTypes);
    const isCategoryValid = !t.validCategories.includes(category as t.CategoryTypes);
    // if (!isGenderValid || !isCategoryValid) {
    //     return redirect('/women');
    // }

    return fetch(`${BASE_URL}/products/?gender=${gender}&category={category}`);
}

export default productListLoader;
