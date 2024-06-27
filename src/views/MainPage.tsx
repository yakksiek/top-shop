import { useLoaderData } from 'react-router-dom';

import Hero from '../components/Hero';
import Products from '../components/Products';
import * as t from '../types';

function MainPage() {
    const data = useLoaderData() as t.LoaderProductData;

    // console.log(data);

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <Products products={data.bestsellers} heading='Check Out Our Products' />
        </>
    );
}

export default MainPage;
