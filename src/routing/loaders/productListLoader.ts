import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import * as t from '../../types';
import { fetchProductList } from '../../api/products';
import { PRODUCTS_PER_PAGE } from '../../constants/pagination';

function productListLoader({ params, request }: LoaderFunctionArgs) {
    const { gender, category, subcategory } = params;
    const pageURL = new URL(request.url);
    const currentPage = Number(pageURL.searchParams.get('page')) || 1;

    const isGenderValid = t.validGenders.includes(gender as t.Gender);
    const isCategoryValid = t.validCategories.includes(category as t.Category);

    if (!isGenderValid || !isCategoryValid) {
        return redirect('/women');
    }

    if (subcategory) {
        const isSubcategoryValid = t.validSubcategories.includes(subcategory as t.Subcategory);

        if (!isSubcategoryValid) {
            return redirect(`/${gender}`);
        }
    }

    return fetchProductList({
        gender: gender as t.Gender,
        category: category as t.Category,
        subcategory: subcategory as t.Subcategory | undefined,
        page: currentPage,
        limit: PRODUCTS_PER_PAGE,
    });
}

export default productListLoader;
