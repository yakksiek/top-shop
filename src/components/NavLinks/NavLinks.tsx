import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import StyledNavigation from '../StyledNavigation';
import { StyledCartIndicator, StyledFavouritesIndicator, StyledLinkItem } from './NavLinks.styled';

function NavLinks() {
    const { toggleLoginModal } = useLoginModalContext();
    const { cartItems } = useCartContext();
    const { favouriteItems } = useFavouritesContext();

    return (
        <StyledNavigation>
            <li className='contact'>
                <span className='label'>Contact Us</span>
            </li>
            <li>
                <StyledLinkItem to='/favourites'>
                    <IoMdHeartEmpty />
                    {favouriteItems && favouriteItems.length > 0 && <StyledFavouritesIndicator />}
                </StyledLinkItem>
            </li>
            <li onClick={toggleLoginModal}>
                <IoPersonOutline />
            </li>
            <li>
                <StyledLinkItem to='/cart'>
                    <IoBagHandleOutline />
                    <StyledCartIndicator>{cartItems.length}</StyledCartIndicator>
                </StyledLinkItem>
            </li>
        </StyledNavigation>
    );
}

export default NavLinks;
