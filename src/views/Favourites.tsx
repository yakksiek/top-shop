import styled from 'styled-components';

import Button from '../components/Button';
import Heading from '../components/Heading';
import Product from '../components/ProductListItem';
import Section from '../components/Section';
import { useFavouritesContext } from '../contexts/FavouritesContext';
import { device } from '../styles/breakpoints';

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
    grid-row-gap: 1rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

function Favourites() {
    const { favouriteItems } = useFavouritesContext();

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
                {favouriteItems.map(item => {
                    return <Product key={item.id} product={item.product} variant='wishlist' />;
                })}
            </StyledWishList>
        </Section>
    );
}

export default Favourites;
