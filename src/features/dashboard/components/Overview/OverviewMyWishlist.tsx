import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import ButtonRoundSlider from '../../../../components/ButtonRoundSlider';
import { useFavouritesContext } from '../../../../contexts/FavouritesContext';
import useSliderScroller from '../../../../hooks/useSliderScroller';
import MyWishlistPreviewItem from './MyWishlistPreviewItem';
import { StyledItemsIndicator, StyledScrollerContainer, StyledMediaScroller } from './OverviewMyWishlist_copy.styled';

function OverviewMyWishlist() {
    const { favouriteItems } = useFavouritesContext();
    const navigate = useNavigate();
    const { scrollerRef, handlePrevious, handleNext, isFirst, isLast } = useSliderScroller(favouriteItems, 2);
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

                <ButtonRoundSlider
                    onClick={handlePrevious}
                    className='scroller__btn'
                    endlessScroll={false}
                    isFirst={isFirst}
                    isLast={isLast}
                    type='left'
                />

                <ButtonRoundSlider
                    onClick={handleNext}
                    className='scroller__btn'
                    isFirst={isFirst}
                    isLast={isLast}
                    endlessScroll={false}
                    type='right'
                />
            </StyledScrollerContainer>
            <Button fill={true} onClick={handleNavigate}>
                Edit My Wishlist
            </Button>
        </div>
    );
}

export default OverviewMyWishlist;
