import { useLoaderData, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Pagination from '../components/Pagination';
import Products from '../components/Products';

import * as t from '../types';
import * as h from '../utils/helpers';

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
