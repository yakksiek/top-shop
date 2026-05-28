import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../../../../constants/api';
import { useCartContext } from '../../../../contexts/CartContext';
import { useFavoritesContext } from '../../../../contexts/FavoritesContext';
import * as t from '../../../../types';
import * as h from '../../../../utils/helpers';

import { BagIcon, CrossIcon, HeartEmptyIcon, HeartFilledIcon } from '../../../../shared/icons';
import {
    StyledButtonCart,
    StyledIconWrapper,
    StyledImgContainer,
    StyledInfoContainer,
    StyledItem,
    StyledLabel,
} from './ProductListItem.styled';

const CART_BUTTON_TEXT = 'Shop';
const ITEM_ADDED_TEXT = 'Added';
const ITEM_IN_CART_TEXT = 'In Cart';

interface ProductProps {
    product: t.Product;
    variant?: 'wishlist';
}

function ProductListItem({ product, variant }: ProductProps) {
    const [buttonText, setButtonText] = useState(CART_BUTTON_TEXT);
    const { addItemToCart, cartItems } = useCartContext();
    const { addItemToFavorites, removeItemFromFavorites, favoriteItems } = useFavoritesContext();
    const { pricePLN, productName, gender, category, subcategory, id } = product;
    const wishlistView = variant === 'wishlist';
    const favoriteItem = favoriteItems.find(item => item.productId === id);

    const handleFavoriteClick = (e: React.MouseEvent, action: () => void) => {
        e.preventDefault();
        e.stopPropagation();
        action();
    };

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isItemInCart = h.findItemInArrById(product.id, cartItems);
        if (isItemInCart) {
            setButtonText(ITEM_IN_CART_TEXT);
        } else {
            addItemToCart(product);
            setButtonText(ITEM_ADDED_TEXT);
        }

        setTimeout(() => {
            setButtonText(CART_BUTTON_TEXT);
        }, 1000);
    };

    return (
        <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
            <StyledItem>
                <StyledImgContainer>
                    <img src={`${BASE_URL}${product.photos[0]}`} alt={productName} />

                    <StyledIconWrapper>
                        {wishlistView ? (
                            <CrossIcon
                                className='cross-icon'
                                onClick={e =>
                                    handleFavoriteClick(
                                        e,
                                        () => favoriteItem && removeItemFromFavorites(favoriteItem.id),
                                    )
                                }
                            />
                        ) : !favoriteItem ? (
                            <HeartEmptyIcon
                                onClick={e => handleFavoriteClick(e, () => addItemToFavorites(product))}
                            />
                        ) : (
                            <HeartFilledIcon
                                onClick={e => handleFavoriteClick(e, () => removeItemFromFavorites(favoriteItem.id))}
                            />
                        )}
                    </StyledIconWrapper>
                </StyledImgContainer>
                <StyledInfoContainer>
                    <StyledLabel>
                        <h4>{productName}</h4>
                        <p>PLN {pricePLN}</p>
                    </StyledLabel>
                    {wishlistView && (
                        <StyledButtonCart
                            className={`cart-wrapper ${buttonText !== CART_BUTTON_TEXT ? 'animate' : ''}`}
                            onClick={handleAddToCart}
                        >
                            <BagIcon />
                            <span className='cart-label'>{buttonText}</span>
                        </StyledButtonCart>
                    )}
                </StyledInfoContainer>
            </StyledItem>
        </Link>
    );
}

export default ProductListItem;
