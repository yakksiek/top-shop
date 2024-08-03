import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';
import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import StyledNavigation from '../StyledNavigation';
import { StyledCartIndicator, StyledFavouritesIndicator, StyledLinkItem } from './NavLinks.styled';
import { useNavigate } from 'react-router-dom';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import { useUser } from '../../features/authentication/useUser';

function NavLinks() {
    const { cartItems } = useCartContext();
    const { favouriteItems } = useFavouritesContext();
    const { isAuthenticated } = useUser();
    const { toggleLoginModal } = useLoginModalContext();
    const navigate = useNavigate();

    const handleProtectedLinkClick = (path: string) => {
        if (isAuthenticated) {
            navigate(path);
        } else {
            toggleLoginModal();
        }
    };

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

            <li onClick={() => handleProtectedLinkClick('/dashboard')}>
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
