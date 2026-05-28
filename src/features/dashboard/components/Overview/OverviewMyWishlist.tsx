import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import ButtonRoundSlider from '../../../../components/ButtonRoundSlider';
import { useFavoritesContext } from '../../../../contexts/FavoritesContext';
import useSliderScroller from '../../../../hooks/useSliderScroller';
import MyWishlistPreviewItem from './MyWishlistPreviewItem';
import { StyledItemsIndicator, StyledMediaScroller, StyledScrollerContainer } from './OverviewMyWishlist.styled';

function OverviewMyWishlist() {
    const { favoriteItems } = useFavoritesContext();
    const navigate = useNavigate();
    const { scrollerRef, handlePrevious, handleNext, isFirst, isLast } = useSliderScroller(favoriteItems, 2);
    const isFavoritesArrEmpty = favoriteItems.length === 0;

    const handleNavigate = () => {
        navigate('/favorites');
    };

    const renderedFavoriteItems = useMemo(() => {
        return favoriteItems.map(item => {
            const { product } = item;
            return <MyWishlistPreviewItem key={product.id} product={product} />;
        });
    }, [favoriteItems]);

    if (isFavoritesArrEmpty) {
        return <p>Your wishlist is empty</p>;
    }

    return (
        <div>
            <StyledItemsIndicator>
                Items: <span>{favoriteItems.length}</span>
            </StyledItemsIndicator>
            <StyledScrollerContainer>
                <StyledMediaScroller ref={scrollerRef}>{renderedFavoriteItems}</StyledMediaScroller>

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
