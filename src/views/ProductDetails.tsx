import styled from 'styled-components';

// import Breadcrumbs from '../components/Breadcrumbs';
import MiniSlider from '../components/MiniSlider';
import ProductDetailsContent from '../components/ProductDetailsContent';
import Section from '../components/Section';
import { device } from '../styles/breakpoints';
import ProductDetailsMedia from '../components/ProductsDetailsMedia';

const product = {
    id: 54,
    gender: 'children',
    category: 'clothing',
    subcategory: 'trousers',
    productName: 'Pink Trousers',
    brand: 'Sun Zi',
    pricePLN: 599,
    priceUSD: 119,
    photos: [
        '/product-photos/children-trousers-2.jpg',
        '/product-photos/children-trousers-3.jpg',
        '/product-photos/children-trousers-1.jpg',
    ],
    description:
        "Our pink trousers are not only stylish but also practical, made with a soft, comfortable fabric that is perfect for children's sensitive skin.",
    maintenanceInfo: 'For best results, wash inside out in cool water, avoid bleach, and line dry.',
};

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
        height: 70vh;
    }
`;

function ProductDetails() {
    return (
        <Section>
            {/* <Breadcrumbs /> */}
            <StyledGridContainer>
                <StyledSliderContainer>
                    <MiniSlider photos={product.photos} productName={product.productName} />
                </StyledSliderContainer>
                <StyledMediaWrapper>
                    <ProductDetailsMedia />
                </StyledMediaWrapper>
                <ProductDetailsContent product={product} />
            </StyledGridContainer>
        </Section>
    );
}

export default ProductDetails;

// src={`${BASE_URL}${product.photos[0]}`}
