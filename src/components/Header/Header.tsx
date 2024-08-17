import { Link } from 'react-router-dom';

import { useSearchInputContext } from '../../contexts/SearchInputContext';
import { useSidebarNavigationContext } from '../../contexts/SidebarNavigationContext';
import Heading from '../Heading';
import Menu from '../Menu';
import NavLinks from '../NavLinks';
import Wrapper from '../Wrapper';

import { useEffect, useState } from 'react';
import { NavigationMenu } from '../NavigationMenu';
import { StyledHeader } from './Header.styled';
import HeaderSearchbar from './HeaderSearchbar';
import LoginModal from '../../features/authentication/Identification';

function Header() {
    const { isOpen: isSidebarNavigationOpen } = useSidebarNavigationContext();
    const { isOpen: isSearchbarOpen, handleSearchInputOpen } = useSearchInputContext();
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
                <LoginModal />
            </StyledHeader>
            <HeaderSearchbar isSearchbarOpen={isSearchbarOpen} handleSearchInputOpen={handleSearchInputOpen} />
        </Wrapper>
    );
}

export default Header;
