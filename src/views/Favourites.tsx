import styled from 'styled-components';

import * as t from '../types';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Product from '../components/ProductListItem';
import { device } from '../styles/breakpoints';
import { useLoaderData } from 'react-router-dom';

// const favouriteProducts = [
//     {
//         id: 9,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-shirt 4',
//         brand: 'Sun Tzu',
//         pricePLN: 129,
//         priceUSD: 39,
//         photos: [
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-3.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//         ],
//         description:
//             "Sun Tzu's T-shirt 4 is perfect for those who value both form and function, with its durable fabric that resists wear and tear.",
//         maintenanceInfo: 'For best care, wash in warm water, dry on low heat, and iron on medium if needed.',
//     },
//     {
//         id: 10,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-Shirt',
//         brand: 'Top Brand',
//         pricePLN: 49,
//         priceUSD: 10,
//         photos: [
//             '/product-photos/man-t-shirt-3.jpg',
//             '/product-photos/man-t-shirt-1.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//         ],
//         description:
//             'This classic T-Shirt by Top Brand is designed for ultimate comfort and durability, perfect for everyday wear or casual outings.',
//         maintenanceInfo:
//             'For best results, wash this t-shirt in cold water and line dry to maintain its shape and color.',
//     },
//     {
//         id: 11,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-shirt 2',
//         brand: 'Sun Tzu',
//         pricePLN: 199,
//         priceUSD: 49,
//         photos: [
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-3.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//         ],
//         description:
//             'T-shirt 2 from Sun Tzu features innovative fabric technology that offers enhanced breathability and moisture-wicking properties for active or leisure use.',
//         maintenanceInfo: 'Machine wash on a gentle cycle and tumble dry on low. Avoid ironing directly on the print.',
//     },
//     {
//         id: 12,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-shirt 3',
//         brand: 'Sun Tzu',
//         pricePLN: 199,
//         priceUSD: 49,
//         photos: [
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-1.jpg',
//         ],
//         description:
//             'T-shirt 3 by Sun Tzu is crafted for comfort and style, combining traditional design with modern fabric enhancements for superior fit and feel.',
//         maintenanceInfo: 'Wash this garment inside out to protect the fabric surface and print. Do not bleach.',
//     },
//     {
//         id: 13,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-shirt 4',
//         brand: 'Sun Tzu',
//         pricePLN: 129,
//         priceUSD: 39,
//         photos: [
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-3.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//         ],
//         description:
//             "This fashion-forward T-shirt 4 from Sun Tzu is designed with an eye for detail, featuring a sleek, minimalist look that doesn't compromise on comfort.",
//         maintenanceInfo:
//             'To maintain the pristine condition of this t-shirt, avoid high heat in washing or drying. Iron on the reverse side.',
//     },
//     {
//         id: 14,
//         gender: 'men',
//         category: 'clothing',
//         subcategory: 't-shirts',
//         productName: 'T-Shirt',
//         brand: 'Top Brand',
//         pricePLN: 49,
//         priceUSD: 10,
//         photos: [
//             '/product-photos/man-t-shirt-1.jpg',
//             '/product-photos/man-t-shirt-4.jpg',
//             '/product-photos/man-t-shirt-3.jpg',
//         ],
//         description:
//             'Enhance your wardrobe with the Top Brand T-Shirt, blending a contemporary fit with the softness and resilience needed for both active days and relaxation.',
//         maintenanceInfo: 'Cold wash and gentle cycle recommended. Dry at low temperatures and iron gently if needed.',
//     },
// ];

const StyledHeader = styled.header`
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;

    p {
        font-size: 1rem;
    }
`;

const StyledActionButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    button {
        max-width: 150px;
    }
`;

export const StyledWishList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

interface FavouritesList {
    id: number;
    productId: number;
    product: t.Product;
}

function Favourites() {
    const favouriteProductsData = useLoaderData() as FavouritesList[];
    const productList = favouriteProductsData.map(({ product }) => product);

    return (
        <Section>
            <StyledHeader>
                <Heading as='h4'>Don't lose your favourites anymore</Heading>
                <p>Sing In or Create an account to save your selection</p>
                <StyledActionButtonWrapper>
                    <Button fill={true}>Sign In</Button>
                </StyledActionButtonWrapper>
            </StyledHeader>
            <StyledWishList>
                {productList.map(item => (
                    <Product key={item.id} product={item} variant='wishlist' />
                ))}
            </StyledWishList>
        </Section>
    );
}

export default Favourites;
