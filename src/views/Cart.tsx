import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import CartProductList from '../features/cart/CartProductList';
import CartSummary from '../features/cart/CartSummary';
import Wrapper from '../components/Wrapper';
import { useCartContext } from '../contexts/CartContext';

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;

    & > * {
        /* background-color: #faf9f8; */
    }
`;

function Cart() {
    const { cartItems } = useCartContext();

    return (
        <Section>
            <Wrapper type='narrow'>
                <Heading as='h3'>Your cart</Heading>
                <StyledGridContainer>
                    <CartProductList products={cartItems} />
                    <CartSummary products={cartItems} />
                </StyledGridContainer>
            </Wrapper>
        </Section>
    );
}

export default Cart;
