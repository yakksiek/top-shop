import { useLoaderData } from 'react-router-dom';

import Hero from '../components/Hero';
import Products from '../components/Products';
import * as t from '../types';
import Editorial from '../components/Editorial';
import ArtOfGiting from '../components/ArtOfGifting';
import StyledProductsWrapper from '../components/Products/StyledProductsWrapper';

function MainPage() {
    const data = useLoaderData() as t.LoaderProductData;

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <StyledProductsWrapper>
                <Products products={data.bestsellers.slice(0, 4)} heading='Check Out Top Products' gapY={true} />
            </StyledProductsWrapper>
            <Editorial videoLink={data.editorialVideo} description={data.description} products={data?.bestsellers} />
            <ArtOfGiting />
        </>
    );
}

export default MainPage;
