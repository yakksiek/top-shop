import { useLoaderData } from 'react-router-dom';

import Hero from '../components/Hero';
import Products from '../components/Products';
import * as t from '../types';
import Editorial from '../components/Editorial';

function MainPage() {
    const data = useLoaderData() as t.LoaderProductData;

    console.log(data);

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <Products products={data.bestsellers} heading='Check Out Our Products' />
            <Editorial videoLink={data.editorialVideo} description={data.description} />
        </>
    );
}

export default MainPage;
