import { LiaTimesSolid } from 'react-icons/lia';

import { BASE_URL } from '../../../constants/api';
import * as t from '../../../types';
import { StyledCartItem, StyledCartItemDetail, StyledCartItemDetailsList, StyledHeader } from './CartProduct.styled';
import { useCartContext } from '../../../contexts/CartContext';

interface CartProductProps {
    item: t.Product;
}

function CartProduct({ item }: CartProductProps) {
    const { removeItemFromCart } = useCartContext();

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

                    <LiaTimesSolid className='remove-btn' onClick={() => removeItemFromCart(item.id)} />
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
