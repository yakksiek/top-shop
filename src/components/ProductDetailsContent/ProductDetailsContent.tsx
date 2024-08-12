import { IoMdHeartEmpty } from 'react-icons/io';
import { SlArrowRight } from 'react-icons/sl';
import { VscHeartFilled } from 'react-icons/vsc';

import { useState } from 'react';
import useNoScroll from '../../hooks/useNoScroll';
import * as t from '../../types';
import * as h from '../../utils/helpers';
import Button from '../Button';
import { ModalHeader, StyledModalWrapper } from '../Modal';
import { Sidebar } from '../Sidebar';

import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
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

const SidebarContentLabel = {
    description: 'Description',
    maintenanceInfo: 'Maintenance Information',
};

const CART_BUTTON_TEXT = 'Add to Cart';
const ITEM_ADDED_TEXT = 'Item added to cart';
const ITEM_IN_CART_TEXT = 'Item already in cart';

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
    const { addItemToCart, cartItems } = useCartContext();
    const { favouriteItems, removeItemFromFavourites, addItemToFavourites } = useFavouritesContext();
    const [sideInfo, setSideInfo] = useState(false);
    const [sidebarContent, setSidebarContent] = useState<SidebarContentType>('description');
    useNoScroll(sideInfo);
    const [buttonText, setButtonText] = useState(CART_BUTTON_TEXT);
    const productInFavourites = favouriteItems.find(favItem => favItem.productId === product.id);

    const handleToggleSidebar = (contentType?: SidebarContentType) => {
        if (contentType) {
            setSidebarContent(contentType);
        }
        setSideInfo(prevState => !prevState);
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
                <div className='row' onClick={() => handleToggleSidebar('description')}>
                    <span>Description</span>
                    <SlArrowRight />
                </div>
                <div className='row' onClick={() => handleToggleSidebar('maintenanceInfo')}>
                    <span>Maintenance Information</span>
                    <SlArrowRight />
                </div>
            </StyledProductFooter>
            <Sidebar toggleSidebar={handleToggleSidebar} isOpen={sideInfo} slideFrom={'right'}>
                <StyledModalWrapper>
                    <ModalHeader toggleModal={handleToggleSidebar} headerText={SidebarContentLabel[sidebarContent]} />
                    <p>{product[sidebarContent]}</p>
                </StyledModalWrapper>
            </Sidebar>
        </StyledProductDetails>
    );
}

export default ProductDetailsContent;
