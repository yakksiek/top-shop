import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoBagHandleOutline } from 'react-icons/io5';

import * as t from '../../types';
import { BASE_URL } from '../../contants/api';
import Heading from '../Heading';

interface ProductProps {
    product: t.Product;
    variant?: 'wishlist';
}

const StyledItem = styled.li`
    padding: 0.5rem;
    cursor: pointer;

    .cart-label {
        opacity: 0;
        transition: opacity 0.6s ease, right 0.3s ease;
    }

    &:hover {
        .cart-label {
            opacity: 1;
            right: 5px;
        }

        .cart-wrapper {
            width: 4rem;
            transition: width 0.4s ease;
        }
    }
`;

const StyledImgContainer = styled.div`
    position: relative;

    img {
        aspect-ratio: 1;
        z-index: 1;
    }
`;

const StyledIconHeartWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.1rem;
`;

const StyledPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
`;

const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledIconCartWrapper = styled.div`
    padding: 0.5rem;
    border-radius: 100vw;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color-black);
    transition: width 0.4s ease;

    display: flex;
    align-items: center;
    gap: 5px;

    position: relative;
    overflow: hidden;

    span {
        font-size: 0.75rem;
        position: absolute;
        right: -100%;
    }

    svg {
        font-size: 0.85rem;
    }
`;

function Product({ product, variant }: ProductProps) {
    // console.log(`${BASE_URL}${product.photos[0]}`);

    const wishlistView = variant === 'wishlist';

    return (
        // <Link>

        <StyledItem>
            <StyledImgContainer>
                <img src={`${BASE_URL}${product.photos[0]}`} alt={product.productName} />
                <StyledIconHeartWrapper>{wishlistView ? <LiaTimesSolid /> : <IoMdHeartEmpty />}</StyledIconHeartWrapper>
            </StyledImgContainer>
            <StyledInfoContainer>
                <div>
                    <Heading as='h5'>{product.productName}</Heading>
                    <StyledPrice>{product.pricePLN} PLN</StyledPrice>
                </div>
                {wishlistView && (
                    <StyledIconCartWrapper className='cart-wrapper'>
                        <>
                            <IoBagHandleOutline />
                            <span className='cart-label'>Shop</span>
                        </>
                    </StyledIconCartWrapper>
                )}
            </StyledInfoContainer>
        </StyledItem>

        // </Link>
    );
}

export default Product;
