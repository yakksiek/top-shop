import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import ButtonRoundSlider from '../../../../components/ButtonRoundSlider';
import { useFavouritesContext } from '../../../../contexts/FavouritesContext';
import useSliderScroller from '../../../../hooks/useSliderScroller';
import MyWishlistPreviewItem from './MyWishlistPreviewItem';
import { StyledItemsIndicator, StyledMediaScroller, StyledScrollerContainer } from './OverviewMyWishlist.styled';

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
                    className={true}
                    endlessScroll={false}
                    isFirst={isFirst}
                    isLast={isLast}
                    type='left'
                />

                <ButtonRoundSlider
                    onClick={handleNext}
                    className={true}
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
