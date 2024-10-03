import { useNavigate } from 'react-router-dom';

import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import { useModalSidebarContext } from '../../contexts/ModalSidebarContext';
import { useUser } from '../../features/authentication/useUser';
import { BagIcon, HeartEmptyIcon, PersonIcon } from '../../shared/icons';
import StyledNavigation from '../StyledNavigation';

import ContactUsSidebar from '../ContactUsSidebar';
import {
    StyledCartIndicator,
    StyledContentWrapper,
    StyledFavouritesIndicator,
    StyledLinkItem,
} from './NavLinks.styled';

function NavLinks() {
    const { cartItems } = useCartContext();
    const { favouriteItems } = useFavouritesContext();
    const { isAuthenticated } = useUser();
    const { toggleLoginModal } = useLoginModalContext();
    const { openSidebarModal } = useModalSidebarContext();
    const navigate = useNavigate();

    const handleProtectedLinkClick = (path: string) => {
        if (isAuthenticated) {
            navigate(path);
        } else {
            toggleLoginModal();
        }
    };

    const handleOpenContactSidebar = () => {
        openSidebarModal(<ContactUsSidebar />);
    };

    return (
        <StyledNavigation>
            <li className='contact' onClick={handleOpenContactSidebar}>
                <span className='label'>Contact Us</span>
            </li>
            <li>
                <StyledLinkItem to='/favourites'>
                    <HeartEmptyIcon />
                    {favouriteItems && favouriteItems.length > 0 && <StyledFavouritesIndicator />}
                </StyledLinkItem>
            </li>

            <li onClick={() => handleProtectedLinkClick('/dashboard')}>
                <StyledContentWrapper>
                    <PersonIcon />
                    {isAuthenticated && <StyledFavouritesIndicator color='black' />}
                </StyledContentWrapper>
            </li>

            <li>
                <StyledLinkItem to='/cart'>
                    <BagIcon />
                    <StyledCartIndicator>{cartItems.length}</StyledCartIndicator>
                </StyledLinkItem>
            </li>
        </StyledNavigation>
    );
}

export default NavLinks;
