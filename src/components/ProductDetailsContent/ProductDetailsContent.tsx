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

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
    const { addItemToCart } = useCartContext();
    const { favouriteItems, removeItemFromFavourites, addItemToFavourites } = useFavouritesContext();
    const [sideInfo, setSideInfo] = useState(false);
    const [sidebarContent, setSidebarContent] = useState<SidebarContentType>('description');
    useNoScroll(sideInfo);
    const productInFavourites = favouriteItems.find(favItem => favItem.productId === product.id);

    const handleToggleSidebar = (contentType?: SidebarContentType) => {
        if (contentType) {
            setSidebarContent(contentType);
        }
        setSideInfo(prevState => !prevState);
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
                <Button fill={true} onClick={() => addItemToCart(product)}>
                    Add to Cart
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
