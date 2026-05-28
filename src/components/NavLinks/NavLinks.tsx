import { useNavigate } from 'react-router-dom';

import { useCartContext } from '../../contexts/CartContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import { useModalSidebarContext } from '../../contexts/ModalSidebarContext';
import { useUser } from '@clerk/clerk-react';
import { BagIcon, HeartEmptyIcon, PersonIcon } from '../../shared/icons';
import StyledNavigation from '../StyledNavigation';

import ContactUsSidebar from '../ContactUsSidebar';
import {
    StyledCartIndicator,
    StyledContentWrapper,
    StyledFavoritesIndicator,
    StyledLinkItem,
} from './NavLinks.styled';

function NavLinks() {
    const { cartItems } = useCartContext();
    const { favoriteItems } = useFavoritesContext();
    const { isSignedIn } = useUser();
    const { toggleLoginModal } = useLoginModalContext();
    const { openSidebarModal } = useModalSidebarContext();
    const navigate = useNavigate();

    const handleProtectedLinkClick = (path: string) => {
        if (isSignedIn) {
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
                <StyledLinkItem to='/favorites'>
                    <HeartEmptyIcon />
                    {favoriteItems && favoriteItems.length > 0 && <StyledFavoritesIndicator />}
                </StyledLinkItem>
            </li>

            <li onClick={() => handleProtectedLinkClick('/dashboard')}>
                <StyledContentWrapper>
                    <PersonIcon />
                    {isSignedIn && <StyledFavoritesIndicator color='black' />}
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
