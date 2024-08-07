import { Link } from 'react-router-dom';

import { useSearchInputContext } from '../../contexts/SearchInputContext';
import { useSidebarContext } from '../../contexts/SidebarContext';
import Heading from '../Heading';
import Menu from '../Menu';
import NavLinks from '../NavLinks';
import Wrapper from '../Wrapper';

import { StyledHeader } from './Header.styled';
import HeaderSearchbar from './HeaderSearchbar';

function Header() {
    const { isOpen: isSidebarOpen } = useSidebarContext();
    const { isOpen: isSearchbarOpen, handleSearchInputOpen } = useSearchInputContext();

    return (
        <Wrapper type='wide'>
            <StyledHeader $isOpen={isSidebarOpen}>
                <Menu />
                <Link to='/' className='logo-wrapper'>
                    <Heading as='h1'>TOP SHOP</Heading>
                </Link>
                <NavLinks />
                <HeaderSearchbar isSearchbarOpen={isSearchbarOpen} handleSearchInputOpen={handleSearchInputOpen} />
            </StyledHeader>
        </Wrapper>
    );
}

export default Header;
