import { Link } from 'react-router-dom';

import { useSidebarNavigationContext } from '../../contexts/SidebarNavigationContext';
import Heading from '../Heading';
import Menu from '../Menu';
import NavLinks from '../NavLinks';
import Wrapper from '../Wrapper';

import { useEffect, useState } from 'react';
import IdentificationModal from '../../features/authentication/IdentificationModal';
import { NavigationMenu } from '../NavigationMenu';
import { StyledHeader } from './Header.styled';
import HeaderSearchbar from './HeaderSearchbar';

function Header() {
    const { isOpen: isSidebarNavigationOpen } = useSidebarNavigationContext();
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsAtTop(currentScrollPos === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper type='wide'>
            <StyledHeader $isOpen={isSidebarNavigationOpen} className={!isAtTop ? 'border' : ''}>
                <Menu />
                <NavigationMenu />
                <Link to='/' className='logo-wrapper'>
                    <Heading as='h1'>T.SHOP</Heading>
                </Link>
                <NavLinks />
                <IdentificationModal />
            </StyledHeader>
            <HeaderSearchbar />
        </Wrapper>
    );
}

export default Header;
