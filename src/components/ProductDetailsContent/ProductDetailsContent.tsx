import { useFetcher } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { SlArrowRight } from 'react-icons/sl';

import * as t from '../../types';
import * as h from '../../utils/helpers';
import Button from '../Button';
import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import { ModalHeader, StyledModalWrapper } from '../Modal';
import useNoScroll from '../../hooks/useNoScroll';

import {
    StyledProductDetails,
    StyledProductHeader,
    StyledProductMainContent,
    StyledProductFooter,
} from './ProductDetailsContent.styled';
import { useCartContext } from '../../contexts/CartContext';

interface ProductDetailsContentProps {
    product: t.Product;
}

type SidebarContentType = 'description' | 'maintenanceInfo';

const SidebarContentLabel = {
    description: 'Description',
    maintenanceInfo: 'Maintenance Information',
};

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
    const { Form } = useFetcher();
    const { addItemToCart } = useCartContext();
    const [sideInfo, setSideInfo] = useState(false);
    const [sidebarContent, setSidebarContent] = useState<SidebarContentType>('description');
    useNoScroll(sideInfo);

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
                    <Form method='POST' action={`/add-to-favourites/${product.id}`}>
                        <button className='submit'>
                            <IoMdHeartEmpty />
                        </button>
                    </Form>
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
