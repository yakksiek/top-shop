import { IoMdHeartEmpty } from 'react-icons/io';
import { SlArrowRight } from 'react-icons/sl';
import styled from 'styled-components';

import * as t from '../../types';
import * as h from '../../utils/helpers';
import Button from '../Button';
import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import { ModalHeader, StyledModalWrapper } from '../Modal';

const StyledProductDetails = styled.div`
    padding: 1rem 6.4vw;
    font-weight: 400;
    overflow: hidden;
`;

const StyledProductHeader = styled.header`
    .product-id {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 0.6rem;
        }

        h2 {
            font-size: 1.125rem;
            margin-bottom: 0.25rem;
            font-weight: 400;
        }

        svg {
            cursor: pointer;
        }
    }
`;

const StyledProductMainContent = styled.div`
    .row {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        font-size: 0.85rem;
    }

    .row:first-of-type {
        border-bottom: var(--border-standard);
    }
`;

const StyledProductFooter = styled.div`
    margin-top: 3rem;

    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.85rem;
        cursor: pointer;
    }

    svg {
        font-size: 0.75rem;
    }
`;

interface ProductDetailsContentProps {
    product: t.Product;
}

type SidebarContentType = 'description' | 'maintenanceInfo';

const SidebarContentLabel = {
    description: 'Description',
    maintenanceInfo: 'Maintenance Information',
};

function ProductDetailsContent({ product }: ProductDetailsContentProps) {
    const [sideInfo, setSideInfo] = useState(false);
    const [sidebarContent, setSidebarContent] = useState<SidebarContentType>('description');

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
                    <IoMdHeartEmpty />
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
                <Button fill={true}>Add to Cart</Button>
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
