import { LiaTimesSolid } from 'react-icons/lia';

import { BASE_URL } from '../../../contants/api';
import * as t from '../../../types';
import styled from 'styled-components';

interface CartProductProps {
    item: t.Product;
}

const StyledCartItem = styled.li`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 1rem;
    margin-bottom: 1.5rem;

    &:not(:last-of-type) {
        border-bottom: var(--border-standard);
    }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h4,
    p {
        font-size: 1rem;
        letter-spacing: 0.0625rem;
    }

    p {
        font-size: 0.85rem;
    }
`;

const StyledCartItemDetailsList = styled.ul`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

const StyledCartItemDetail = styled.li`
    flex: 1 1 50%;
    font-size: 0.65rem;
    letter-spacing: 0.05rem;

    span:not(:first-child) {
        margin-left: 5px;
    }
`;

function CartProduct({ item }: CartProductProps) {
    return (
        <StyledCartItem>
            <div>
                <img src={`${BASE_URL}${item.photos[0]}`} />
            </div>
            <div>
                <StyledHeader>
                    <div>
                        <h4>{item.productName}</h4>
                        <p>PLN {item.pricePLN}</p>
                    </div>

                    <LiaTimesSolid className='remove-btn' />
                </StyledHeader>
                <StyledCartItemDetailsList>
                    <StyledCartItemDetail>
                        <span>Brand:</span>
                        <span>{item.brand}</span>
                    </StyledCartItemDetail>
                    <StyledCartItemDetail>
                        <span>Category:</span>
                        <span>{item.category}</span>
                    </StyledCartItemDetail>
                    <StyledCartItemDetail>
                        <span>Gender:</span>
                        <span>{item.gender}</span>
                    </StyledCartItemDetail>
                    <StyledCartItemDetail>
                        <span>Total:</span>
                        <span>{item.pricePLN}</span>
                    </StyledCartItemDetail>
                </StyledCartItemDetailsList>
            </div>
        </StyledCartItem>
    );
}

export default CartProduct;
