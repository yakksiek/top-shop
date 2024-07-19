import { Link } from 'react-router-dom';

import { useSearchInputContext } from '../../contexts/SearchInputContext';
import { useSidebarContext } from '../../contexts/SidebarContext';
import Heading from '../Heading';
import Menu from '../Menu';
import NavLinks from '../NavLinks';
import { SearchInput } from '../SearchInput';
import Wrapper from '../Wrapper';

import { StyledHeader, StyledOverlay, StyledSearchbarContainer } from './Header.styled';

function Header() {
    const { isOpen: isSidebarOpen } = useSidebarContext();
    const { isOpen: isSearchBarOpen, handleSearchInputOpen } = useSearchInputContext();

    return (
        <Wrapper type='wide'>
            <StyledHeader $isOpen={isSidebarOpen}>
                <Menu />
                <Link to='/' className='logo-wrapper'>
                    <Heading as='h1'>TOP SHOP</Heading>
                </Link>
                <NavLinks />
                <StyledSearchbarContainer $isOpen={isSearchBarOpen}>
                    <SearchInput type='header' />
                    <StyledOverlay $isOpen={isSearchBarOpen} onClick={handleSearchInputOpen} />
                </StyledSearchbarContainer>
            </StyledHeader>
        </Wrapper>
    );
}

export default Header;
