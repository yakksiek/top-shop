import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BASE_URL } from '../contants/api';
import * as t from '../types';

function productListLoader({ params, request }: LoaderFunctionArgs) {
    const { gender, category, subcategory } = params;
    const pageURL = new URL(request.url);
    const currentPage = pageURL.searchParams.get('page') || 1;

    const pagination = `&_limit=8&_page=${currentPage}`;

    const isGenderValid = t.validGenders.includes(gender as t.GenderTypes);
    const isCategoryValid = t.validCategories.includes(category as t.CategoryTypes);

    if (!isGenderValid || !isCategoryValid) {
        return redirect('/women');
    }

    let url = `${BASE_URL}/products/?gender=${gender}&category=${category}`;

    if (subcategory) {
        const isSubcategoryValid = t.validSubcategories.includes(subcategory as t.SubcategoryTypes);

        if (!isSubcategoryValid) {
            return redirect(`/${gender}`);
        }

        url = url + `&subcategory=${subcategory}`;
    }

    return fetch(url + pagination).then(res => {
        const numberOfPages = Math.ceil(Number(res.headers.get('X-Total-Count')) / 8);

        return res.json().then(products => {
            return {
                products,
                numberOfPages,
            };
        });
    });
}

export default productListLoader;
