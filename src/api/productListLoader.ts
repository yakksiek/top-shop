import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BASE_URL } from '../contants/api';
import * as t from '../types';

function productListLoader({ params }: LoaderFunctionArgs<{ gender: string; category: string }>) {
    const { gender, category, subcategory } = params;

    const isGenderValid = t.validGenders.includes(gender as t.GenderTypes);
    const isCategoryValid = t.validCategories.includes(category as t.CategoryTypes);

    if (!isGenderValid || !isCategoryValid) {
        return redirect('/women');
    }

    const url = `${BASE_URL}/products/?gender=${gender}&category=${category}`;

    const isSubcategoryValid = t.validSubcategories.includes(subcategory as t.SubcategoryTypes);

    // if (!isSubcategoryValid) {
    //     return redirect(`/${gender}`);
    // }

    if (subcategory) {
        console.log(params);
        return fetch(`${url}&subcategory=${subcategory}`);
    }

    return fetch(url);
}

export default productListLoader;
