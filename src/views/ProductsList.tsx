import Products from '../components/Products';
import Breadcrumbs from '../components/Breadcrumbs';
import Pagination from '../components/Pagination';
import { useLoaderData, useParams } from 'react-router-dom';

import * as t from '../types';
import * as h from '../utils/helpers';
import { useEffect } from 'react';
import { BASE_URL } from '../contants/api';

function ProductsList() {
    const params = useParams();
    const products = useLoaderData() as t.Product[];
    const heading = params.category ? h.capitalise(params.category) : '';

    useEffect(() => {
        fetch(`${BASE_URL}/products/?gender=women&category=clothing`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            <Breadcrumbs />
            <Products products={products} heading={heading} />
            <Pagination numOfPages={5} />
        </div>
    );
}

export default ProductsList;
