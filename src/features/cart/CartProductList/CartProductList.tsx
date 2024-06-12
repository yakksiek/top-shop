import styled from 'styled-components';
import * as t from '../../../types';
import CartProduct from '../CartProduct/CartProduct';

interface CartProductListProps {
    products: t.Product[];
}

const StyledCartProductList = styled.ul`
    padding: 1.5rem;
`;

function CartProductList({ products }: CartProductListProps) {
    return (
        <StyledCartProductList>
            {products.map(cartItem => (
                <CartProduct key={cartItem.id} item={cartItem} />
            ))}
        </StyledCartProductList>
    );
}

export default CartProductList;
