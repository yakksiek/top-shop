import styled from 'styled-components';

import { device } from '../styles/breakpoints';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Section from '../components/Section';
import { useFavoritesContext } from '../contexts/FavoritesContext';
import { useLoginModalContext } from '../contexts/LoginModalContext';
import { useUser } from '@clerk/clerk-react';
import ProductListItem from '../features/product/components/ProductListItem';

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

function Favorites() {
    const { favoriteItems } = useFavoritesContext();
    const { toggleLoginModal } = useLoginModalContext();
    const { isSignedIn, isLoaded } = useUser();

    return (
        <Section>
            <StyledHeader>
                {!isSignedIn && isLoaded ? (
                    <>
                        <Heading as='h4'>Don't lose your favorites anymore</Heading>
                        <p>Sing In or Create an account to save your selection</p>
                        <StyledActionButtonWrapper>
                            <Button fill={true} onClick={toggleLoginModal}>
                                Sign In
                            </Button>
                        </StyledActionButtonWrapper>
                    </>
                ) : (
                    <Heading as='h3' $marginBottom={true}>
                        Your favorites list
                    </Heading>
                )}
            </StyledHeader>
            <StyledWishList>
                {favoriteItems.map(item => {
                    return <ProductListItem key={item.id} product={item.product} variant='wishlist' />;
                })}
            </StyledWishList>
        </Section>
    );
}

export default Favorites;
