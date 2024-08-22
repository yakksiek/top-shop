import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import Hero from '../components/Hero';
import Products from '../components/Products';
import * as t from '../types';
import Editorial from '../components/Editorial';
import ArtOfGiting from '../components/ArtOfGifting';
import StyledProductsWrapper from '../components/Products/StyledProductsWrapper';

const MARGIN_LEFT_TOUCH_PREVENT = 20;

function MainPage() {
    const data = useLoaderData() as t.LoaderProductData;

    useEffect(() => {
        const preventSwipeBack = (event: TouchEvent) => {
            const touch = event.touches[0];
            const startX = touch.clientX;

            if (startX < MARGIN_LEFT_TOUCH_PREVENT) {
                event.preventDefault();
            }
        };

        document.addEventListener('touchstart', preventSwipeBack, { passive: false });

        return () => {
            document.removeEventListener('touchstart', preventSwipeBack);
        };
    }, []);

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
