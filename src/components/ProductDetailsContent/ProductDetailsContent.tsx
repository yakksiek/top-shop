import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { VscHeartFilled } from 'react-icons/vsc';

import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import { useModalSidebarContext } from '../../contexts/ModalSidebarContext';
import * as t from '../../types';
import * as h from '../../utils/helpers';
import Button from '../Button';
import { ModalHeader, StyledModalWrapper } from '../Modal';
import ProductDetailsFooterRow from './ProductDetailsFooterRow';

import {
    StyledProductDetails,
    StyledProductFooter,
    StyledProductHeader,
    StyledProductMainContent,
} from './ProductDetailsContent.styled';

interface ProductDetailsContentProps {
    product: t.Product;
}

type SidebarContentType = 'description' | 'maintenanceInfo';

const sidebarContentLabel = {
    description: 'Description',
    maintenanceInfo: 'Maintenance Information',
};

const CART_BUTTON_TEXT = 'Add to Cart';
const ITEM_ADDED_TEXT = 'Item added to cart';
const ITEM_IN_CART_TEXT = 'Item already in cart';

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
    const { addItemToCart, cartItems } = useCartContext();
    const { favouriteItems, removeItemFromFavourites, addItemToFavourites } = useFavouritesContext();
    const { openSidebarModal, closeSidebarModal } = useModalSidebarContext();
    const [buttonText, setButtonText] = useState(CART_BUTTON_TEXT);
    const productInFavourites = favouriteItems.find(favItem => favItem.productId === product.id);

    const handleToggleSidebarNavigation = (contentType: SidebarContentType) => {
        openSidebarModal(
            <StyledModalWrapper>
                <ModalHeader toggleModal={closeSidebarModal} headerText={sidebarContentLabel[contentType]} />
                <p>{product[contentType]}</p>
            </StyledModalWrapper>,
        );
    };

    const handleAddToCart = (product: t.Product) => {
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
        <StyledProductDetails>
            <StyledProductHeader>
                <div className='product-id'>
                    <span>ID: {product.id}</span>
                    {productInFavourites ? (
                        <VscHeartFilled onClick={() => removeItemFromFavourites(productInFavourites.id)} />
                    ) : (
                        <IoMdHeartEmpty onClick={() => addItemToFavourites(product)} />
                    )}
                </div>
                <h2>{product.productName}</h2>
            </StyledProductHeader>
            <StyledProductMainContent>
                <div className='row'>
                    <span>Price:</span>
                    <span>{h.formatCurrency(product.pricePLN)}</span>
                </div>
                <div className='row'>
                    <span>Brand:</span>
                    <span>{product.brand}</span>
                </div>
                <Button
                    fill={true}
                    onClick={() => handleAddToCart(product)}
                    isDisabled={buttonText !== CART_BUTTON_TEXT}
                >
                    {buttonText}
                </Button>
            </StyledProductMainContent>
            <StyledProductFooter>
                {Object.keys(sidebarContentLabel).map(key => {
                    const contentType = key as SidebarContentType;
                    const label = sidebarContentLabel[contentType];
                    return (
                        <ProductDetailsFooterRow
                            key={contentType}
                            label={label}
                            onClick={() => handleToggleSidebarNavigation(contentType)}
                        />
                    );
                })}
            </StyledProductFooter>
        </StyledProductDetails>
    );
}

export default ProductDetailsContent;
