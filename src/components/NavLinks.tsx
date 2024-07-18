import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';
import StyledNavigation from './StyledNavigation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthenticationContext } from '../contexts/AuthenticationContext';
import { useCartContext } from '../contexts/CartContext';

const StyledListItem = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledCartIndicator = styled.div`
    color: var(--color-grey-0);
    position: absolute;
    font-size: 9px;
    top: -1px;
    right: -1px;
    transform: translate(50%, -50%);
    display: block;
    padding-left: 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 0.75rem;
    letter-spacing: 0;
    width: 0.75rem;
    background-color: var(--color-black);
    border-radius: 50%;
    text-align: center;
`;

const StyledFavouritesIndicator = styled.div`
    position: absolute;
    top: -1px;
    right: -1px;
    height: 0.375rem;
    width: 0.375rem;
    transform: translate(50%, -50%);
    background-color: var(--color-orange-400);
    border-radius: 50%;
    display: block;
    border: 1px solid var(--color-grey-0);
`;

function NavLinks() {
    const { toggleLoginModal } = useAuthenticationContext();
    const { cartItems } = useCartContext();

    return (
        <StyledNavigation>
            <li className='contact'>
                <span className='label'>Contact Us</span>
            </li>
            <li>
                <StyledListItem to='/favourites'>
                    <IoMdHeartEmpty />
                    <StyledFavouritesIndicator />
                </StyledListItem>
            </li>
            <li onClick={toggleLoginModal}>
                <IoPersonOutline />
            </li>
            <li>
                <StyledListItem to='/cart'>
                    <IoBagHandleOutline />
                    <StyledCartIndicator>{cartItems.length}</StyledCartIndicator>
                </StyledListItem>
            </li>
        </StyledNavigation>
    );
}

export default NavLinks;
