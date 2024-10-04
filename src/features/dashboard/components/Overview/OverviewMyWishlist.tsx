import { useMemo } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';
import { useFavouritesContext } from '../../../../contexts/FavouritesContext';
import useSliderScroller from '../../../../hooks/useSliderScroller';
import MyWishlistPreviewItem from './MyWishlistPreviewItem';

interface NavigationButtonProps {
    $endlessScroll: boolean;
    $currentItemIndex: number;
    $isFirst: boolean;
    $isLast: boolean;
}

const StyledItemsIndicator = styled.div`
    margin-bottom: 1rem;
    font-size: 0.875rem;
`;

const StyledScrollerContainer = styled.div`
    position: relative;

    .scroller__btn {
        transition: opacity 0.5s ease, visibility 0.3s ease;
        opacity: 0;
        visibility: hidden;
    }

    &:hover {
        .scroller__btn {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const StyledMediaScroller = styled.ul`
    --grid-gap: 1rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc(50% - 4.5rem);
    overflow-x: hidden;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    gap: var(--grid-gap);
`;

const NavigationButton = styled.button<NavigationButtonProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-grey-0);
    color: var(--color-black);
    border: none;
    padding: 0.75rem;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;
    aspect-ratio: 1;

    &:hover {
        background-color: var(--color-black);
        color: var(--color-grey-0);
    }

    &:first-of-type {
        left: 1rem;
        ${({ $isFirst, $endlessScroll }) =>
            $isFirst &&
            !$endlessScroll &&
            css`
                display: none;
            `}
    }

    &:last-of-type {
        right: 1rem;
        ${({ $isLast, $endlessScroll }) =>
            $isLast &&
            !$endlessScroll &&
            css`
                display: none;
            `}
    }
`;

function OverviewMyWishlist() {
    const { favouriteItems } = useFavouritesContext();
    const navigate = useNavigate();
    const { scrollerRef, currentItemIndex, handlePrevious, handleNext, isFirst, isLast } =
        useSliderScroller(favouriteItems);
    const isFavouritesArrEmpty = favouriteItems.length === 0;

    const handleNavigate = () => {
        navigate('/favourites');
    };

    const renderedFavouriteItems = useMemo(() => {
        return favouriteItems.map(item => {
            const { product } = item;
            return <MyWishlistPreviewItem key={product.id} product={product} />;
        });
    }, [favouriteItems]);

    if (isFavouritesArrEmpty) {
        return <p>Your wishlist is empty</p>;
    }

    return (
        <div>
            <StyledItemsIndicator>
                Items: <span>{favouriteItems.length}</span>
            </StyledItemsIndicator>
            <StyledScrollerContainer>
                <StyledMediaScroller ref={scrollerRef}>{renderedFavouriteItems}</StyledMediaScroller>
                <NavigationButton
                    onClick={handlePrevious}
                    className='scroller__btn'
                    $endlessScroll={false}
                    $currentItemIndex={currentItemIndex}
                    $isFirst={isFirst}
                    $isLast={isLast}
                >
                    <SlArrowLeft />
                </NavigationButton>
                <NavigationButton
                    onClick={handleNext}
                    className='scroller__btn'
                    $isFirst={isFirst}
                    $isLast={isLast}
                    $endlessScroll={false}
                    $currentItemIndex={currentItemIndex}
                >
                    <SlArrowRight />
                </NavigationButton>
            </StyledScrollerContainer>
            <Button fill={true} onClick={handleNavigate}>
                Edit My Wishlist
            </Button>
        </div>
    );
}

export default OverviewMyWishlist;
