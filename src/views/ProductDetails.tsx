import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';

import * as t from '../types/index';
import MiniSlider from '../features/product/components/MiniSlider';
import { device } from '../styles/breakpoints';
import Section from '../components/Section';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductDetailsContent from '../features/product/components/ProductDetailsContent';
import ProductDetailsMedia from '../features/product/components/ProductsDetailsMedia';

const StyledGridContainer = styled.div`
    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const StyledSliderContainer = styled.div`
    position: relative;

    @media ${device.tablet} {
        display: none;
    }
`;

const StyledMediaWrapper = styled.div`
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`;

const StyledBody = styled.div`
    width: 100%;
`;

function ProductDetails() {
    const product = useLoaderData() as t.Product;

    return (
        <Section>
            <Breadcrumbs />
            <StyledGridContainer>
                <StyledSliderContainer>
                    <MiniSlider photos={product.photos} productName={product.productName} />
                </StyledSliderContainer>
                <StyledMediaWrapper>
                    <ProductDetailsMedia photos={product.photos} />
                </StyledMediaWrapper>
                <StyledBody>
                    <ProductDetailsContent product={product} />
                </StyledBody>
            </StyledGridContainer>
        </Section>
    );
}

export default ProductDetails;
