import styled from 'styled-components';

import MiniSlider from '../components/MiniSlider';
import ProductDetailsContent from '../components/ProductDetailsContent';
import Section from '../components/Section';
import { device } from '../styles/breakpoints';
import ProductDetailsMedia from '../components/ProductsDetailsMedia';
import { useLoaderData } from 'react-router-dom';
import * as t from '../types/index';
import Breadcrumbs from '../components/Breadcrumbs';

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
                <ProductDetailsContent product={product} />
            </StyledGridContainer>
        </Section>
    );
}

export default ProductDetails;
