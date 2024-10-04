import { useLoaderData, useParams } from 'react-router-dom';

import * as t from '../types';
import * as h from '../utils/helpers';
import Products from '../features/product/components/Products';
import Pagination from '../components/Pagination';
import Breadcrumbs from '../components/Breadcrumbs';

function ProductsList() {
    const params = useParams();
    const { products, numberOfPages } = useLoaderData() as { products: t.Product[]; numberOfPages: number };
    const heading = params.category ? h.capitalise(params.category) : '';

    return (
        <div>
            <Breadcrumbs />
            <Products products={products} heading={heading} />
            <Pagination numOfPages={numberOfPages} />
        </div>
    );
}

export default ProductsList;
