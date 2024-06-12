import styled from 'styled-components';
import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaApplePay } from 'react-icons/fa';

import * as t from '../../../types';
import * as h from '../../../utils/helpers';

import Button from '../../../components/Button';
import Heading from '../../../components/Heading';

const StyledWrapper = styled.div`
    background-color: #faf9f8;
    padding: 1.5rem;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
        font-size: 1rem;
    }

    .discount-label {
        font-size: 0.75rem;
    }

    .discount-button {
        background-color: transparent;
        border: none;
        text-decoration: underline;
        font-size: 0.75rem;
    }

    &.total {
        border-top: 1px solid var(--color-black);
        padding: 1rem 0;

        span {
            font-size: 1rem;
            font-weight: 600;
        }
    }
`;

const StyledHeader = styled.div`
    margin-bottom: 1rem;
    border-bottom: var(--border-standard);
`;

const StyledSummary = styled.div`
    margin-bottom: 1rem;
`;

const StyledPaymentInfoWrapper = styled.div`
    p {
        font-size: 0.75rem;
        color: var(--color-grey-500);
        margin-bottom: 0.25rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
`;

interface CartProductListProps {
    products: t.Product[];
}

function CartSummary({ products }: CartProductListProps) {
    const DELIVERY = 16;
    const totalSum = products.reduce((acc, curr) => acc + curr.pricePLN, 0);

    return (
        <StyledWrapper>
            <StyledHeader>
                <StyledRow>
                    <p className='discount-label'>Discounts</p>
                    <button className='discount-button'>Apply discount</button>
                </StyledRow>
                <Heading as='h5' $marginBottom={false}>
                    Login to use your personal offers!
                </Heading>
                <Button>Sign in</Button>
            </StyledHeader>
            <StyledSummary>
                <StyledRow>
                    <span>Order value</span>
                    <span>{h.formatCurrency(totalSum)}</span>
                </StyledRow>
                <StyledRow>
                    <span>Delivery</span>
                    <span>{h.formatCurrency(DELIVERY)}</span>
                </StyledRow>
                <StyledRow className='total'>
                    <span>Total</span>
                    <span>{h.formatCurrency(totalSum + DELIVERY)}</span>
                </StyledRow>
            </StyledSummary>
            <Button fill={true}>Continue to checkout</Button>
            <StyledPaymentInfoWrapper>
                <Heading as='h5'>We accept</Heading>
                <ul>
                    <li>
                        <FaCcMastercard />
                    </li>
                    <li>
                        <FaCcVisa />
                    </li>
                    <li>
                        <FaCcPaypal />
                    </li>
                    <li>
                        <FaApplePay />
                    </li>
                </ul>
                <p>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
                <p>28 days withdrawal. Read more about return and refund policy.</p>
            </StyledPaymentInfoWrapper>
        </StyledWrapper>
    );
}

export default CartSummary;
