import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import CartProductList from '../features/cart/CartProductList';
import CartSummary from '../features/cart/CartSummary';
import Wrapper from '../components/Wrapper';
import { useCartContext } from '../contexts/CartContext';
import { device } from '../styles/breakpoints';

const StyledGridContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        grid-gap: 2rem;
    }
`;

function Cart() {
    const { cartItems } = useCartContext();
    const cartItemHeaderText = cartItems.length === 0 ? 'Your cart is empty' : 'Your cart';

    return (
        <Section>
            <Wrapper type='narrow'>
                <Heading as='h3' $marginBottom={true}>
                    {cartItemHeaderText}
                </Heading>
                <StyledGridContainer>
                    <CartProductList products={cartItems} />
                    <CartSummary products={cartItems} />
                </StyledGridContainer>
            </Wrapper>
        </Section>
    );
}

export default Cart;
