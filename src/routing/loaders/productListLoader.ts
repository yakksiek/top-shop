import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import * as t from '../../types';
import { fetchProductList } from '../../api/products';
import { PRODUCTS_PER_PAGE } from '../../constants/pagination';

function productListLoader({ params, request }: LoaderFunctionArgs) {
    const { gender, category, subcategory } = params;
    const pageURL = new URL(request.url);
    const currentPage = Number(pageURL.searchParams.get('page')) || 1;

    const isGenderValid = t.validGenders.includes(gender as t.GenderTypes);
    const isCategoryValid = t.validCategories.includes(category as t.CategoryTypes);

    if (!isGenderValid || !isCategoryValid) {
        return redirect('/women');
    }

    if (subcategory) {
        const isSubcategoryValid = t.validSubcategories.includes(subcategory as t.SubcategoryTypes);

        if (!isSubcategoryValid) {
            return redirect(`/${gender}`);
        }
    }

    return fetchProductList({
        gender: gender as t.GenderTypes,
        category: category as t.CategoryTypes,
        subcategory: subcategory as t.SubcategoryTypes | undefined,
        page: currentPage,
        limit: PRODUCTS_PER_PAGE,
    });
}

export default productListLoader;
