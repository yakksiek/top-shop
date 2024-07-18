import styled from 'styled-components';

import * as t from '../types';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Product from '../components/ProductListItem';
import { device } from '../styles/breakpoints';
import { useLoaderData } from 'react-router-dom';

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
                {productList.map((item, index) => {
                    const favouriteListObj = favouriteProductsData.find(
                        favDataItem => favDataItem.productId === item.id,
                    );

                    if (!favouriteListObj) return;

                    return (
                        <Product
                            key={item.id + index}
                            product={item}
                            variant='wishlist'
                            favouritesId={favouriteListObj.id}
                        />
                    );
                })}
            </StyledWishList>
        </Section>
    );
}

export default Favourites;
