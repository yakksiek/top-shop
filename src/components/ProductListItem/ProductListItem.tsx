import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';
import { VscHeartFilled } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../../contants/api';
import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import * as t from '../../types';
import Heading from '../Heading';
import {
    StyledButtonCart,
    StyledIconWrapper,
    StyledImgContainer,
    StyledInfoContainer,
    StyledItem,
    StyledPrice,
} from './ProductListItem.styled';

interface ProductProps {
    product: t.Product;
    variant?: 'wishlist';
}

function ProductListItem({ product, variant }: ProductProps) {
    const { addItemToCart } = useCartContext();
    const { addItemToFavourites, removeItemFromFavourites, favouriteItems } = useFavouritesContext();
    const { pricePLN, productName, gender, category, subcategory, id } = product;
    const wishlistView = variant === 'wishlist';
    const favouriteItem = favouriteItems.find(item => item.productId === id);

    const handleFavouriteClick = (e: React.MouseEvent, action: () => void) => {
        e.preventDefault();
        e.stopPropagation();
        action();
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
                    <div>
                        <Heading as='h5'>{productName}</Heading>
                        <StyledPrice>PLN {pricePLN}</StyledPrice>
                    </div>
                    {wishlistView && (
                        <StyledButtonCart
                            className='cart-wrapper'
                            onClick={e => {
                                addItemToCart(product);
                                e.preventDefault();
                            }}
                        >
                            <IoBagHandleOutline />
                            <span className='cart-label'>Shop</span>
                        </StyledButtonCart>
                    )}
                </StyledInfoContainer>
            </StyledItem>
        </Link>
    );
}

export default ProductListItem;
