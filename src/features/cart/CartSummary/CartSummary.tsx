import { FaApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

import Button from '../../../components/Button';
import Heading from '../../../components/Heading';
import { useLoginModalContext } from '../../../contexts/LoginModalContext';
import * as t from '../../../types';
import * as h from '../../../utils/helpers';
import { useUser } from '../../authentication/useUser';

import { StyledHeader, StyledPaymentInfoWrapper, StyledRow, StyledSummary, StyledWrapper } from './CartSummary.styled';

const DELIVERY = 16;

interface CartProductListProps {
    products: t.Product[];
}

function CartSummary({ products }: CartProductListProps) {
    const { toggleLoginModal } = useLoginModalContext();
    const { isAuthenticated } = useUser();

    const productsTotal = products.reduce((acc, curr) => acc + curr.pricePLN, 0);
    const clubCartReduction = isAuthenticated ? productsTotal * 0.1 : productsTotal;

    const totalPriceAfterReductions = productsTotal - clubCartReduction + DELIVERY;

    return (
        <StyledWrapper>
            <StyledHeader>
                {/* <StyledRow>
                    <p className='discount-label'>Discounts</p>
                    <button className='discount-button'>Apply discount</button>
                </StyledRow> */}
                {!isAuthenticated && (
                    <>
                        <Heading as='h5' $marginBottom={false}>
                            Login to use your personal offers!
                        </Heading>
                        <Button onClick={toggleLoginModal}>Sign in</Button>
                    </>
                )}
            </StyledHeader>
            <StyledSummary>
                <StyledRow>
                    <span>Order value</span>
                    <span>{h.formatCurrency(productsTotal)}</span>
                </StyledRow>
                <StyledRow>
                    <span>Delivery</span>
                    <span>{h.formatCurrency(DELIVERY)}</span>
                </StyledRow>
                {isAuthenticated && (
                    <StyledRow>
                        <span>Club member</span>
                        <span style={{ color: 'red' }}>{h.formatCurrency(-Math.abs(productsTotal * 0.1))}</span>
                    </StyledRow>
                )}
                <StyledRow className='total'>
                    <span>Total</span>
                    <span>{h.formatCurrency(totalPriceAfterReductions)}</span>
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
