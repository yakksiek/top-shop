import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';

import { useCartContext } from '../../contexts/CartContext';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import StyledNavigation from '../StyledNavigation';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import { useUser } from '../../features/authentication/useUser';
import { useModalSidebarContext } from '../../contexts/ModalSidebarContext';

import {
    StyledCartIndicator,
    StyledContentWrapper,
    StyledFavouritesIndicator,
    StyledLinkItem,
} from './NavLinks.styled';
import ContactUsSidebar from '../ContactUsSidebar';

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
                    <IoMdHeartEmpty />
                    {favouriteItems && favouriteItems.length > 0 && <StyledFavouritesIndicator />}
                </StyledLinkItem>
            </li>

            <li onClick={() => handleProtectedLinkClick('/dashboard')}>
                <StyledContentWrapper>
                    <IoPersonOutline />
                    {isAuthenticated && <StyledFavouritesIndicator color='black' />}
                </StyledContentWrapper>
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
