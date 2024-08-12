import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';
import { VscHeartFilled } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { BASE_URL } from '../../contants/api';
import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import * as t from '../../types';
import * as h from '../../utils/helpers';

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
    const { addItemToFavourites, removeItemFromFavourites, favouriteItems } = useFavouritesContext();
    const { pricePLN, productName, gender, category, subcategory, id } = product;
    const wishlistView = variant === 'wishlist';
    const favouriteItem = favouriteItems.find(item => item.productId === id);

    const handleFavouriteClick = (e: React.MouseEvent, action: () => void) => {
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
                            <LiaTimesSolid
                                onClick={e =>
                                    handleFavouriteClick(
                                        e,
                                        () => favouriteItem && removeItemFromFavourites(favouriteItem.id),
                                    )
                                }
                            />
                        ) : !favouriteItem ? (
                            <IoMdHeartEmpty
                                onClick={e => handleFavouriteClick(e, () => addItemToFavourites(product))}
                            />
                        ) : (
                            <VscHeartFilled
                                onClick={e => handleFavouriteClick(e, () => removeItemFromFavourites(favouriteItem.id))}
                            />
                        )}
                    </StyledIconWrapper>
                </StyledImgContainer>
                <StyledInfoContainer>
                    <StyledLabel>
                        <p>{productName}</p>
                        <p>{pricePLN}PLN</p>
                    </StyledLabel>
                    {wishlistView && (
                        <StyledButtonCart className='cart-wrapper' onClick={handleAddToCart}>
                            <IoBagHandleOutline />
                            <span className='cart-label'>{buttonText}</span>
                        </StyledButtonCart>
                    )}
                </StyledInfoContainer>
            </StyledItem>
        </Link>
    );
}

export default ProductListItem;
