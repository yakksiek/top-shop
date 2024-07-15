import { Link, useFetcher } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline } from 'react-icons/io5';
import { LiaTimesSolid } from 'react-icons/lia';

import { BASE_URL } from '../../contants/api';
import * as t from '../../types';
import Heading from '../Heading';
import {
    StyledIconCartWrapper,
    StyledIconHeartWrapper,
    StyledImgContainer,
    StyledInfoContainer,
    StyledItem,
    StyledPrice,
} from './ProductListItem.styled';

interface ProductProps {
    product: t.Product;
    variant?: 'wishlist';
}

function Product({ product, variant }: ProductProps) {
    const { Form } = useFetcher();
    const { pricePLN, productName, gender, category, subcategory, id } = product;
    const wishlistView = variant === 'wishlist';

    return (
        <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
            <StyledItem>
                <StyledImgContainer>
                    <img src={`${BASE_URL}${product.photos[0]}`} alt={productName} />
                    <Form
                        method='POST'
                        action={`/add-to-favourites/${id}`}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <StyledIconHeartWrapper>
                            <button className='form'>{wishlistView ? <LiaTimesSolid /> : <IoMdHeartEmpty />}</button>
                        </StyledIconHeartWrapper>
                    </Form>
                </StyledImgContainer>
                <StyledInfoContainer>
                    <div>
                        <Heading as='h5'>{productName}</Heading>
                        <StyledPrice>PLN {pricePLN}</StyledPrice>
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
        </Link>
    );
}

export default Product;
