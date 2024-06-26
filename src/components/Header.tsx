import styled, { css } from 'styled-components';
import { device } from '../styles/breakpoints';
import Menu from './Menu';
import NavLinks from './NavLinks';
import { useSidebarContext } from '../contexts/SidebarContext';
import { useSearchInputContext } from '../contexts/SearchInputContext';
import { SearchInput } from './SearchInput';
import Wrapper from './Wrapper';
import Heading from './Heading';
import { Link } from 'react-router-dom';

interface StyledHeaderProps {
    $isOpen: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding: 1.2rem 0;
    position: relative;
    height: var(--header-height);

    @media ${device.mobile} {
        padding: 1.2rem 0;
        z-index: 11;
        background-color: var(--color-grey-0);
    }
`;

interface StyledSearchbarContainerProps {
    $isOpen: boolean;
}

const StyledSearchbarContainer = styled.div<StyledSearchbarContainerProps>`
    position: fixed;
    background-color: var(--color-grey-0);
    z-index: 2;
    width: 100%;
    left: 0;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease, opacity 0.3s ease;

    @media ${device.mobile} {
        top: 0;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                top: var(--header-height);
                opacity: 1;
                transform: translateY(0);
            `}
    }

    @media ${device.tablet} {
        top: -100%;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                top: 0;
                opacity: 1;
                transform: translateY(0);
            `}
    }
`;

interface StyledOverlayProps {
    $isOpen: boolean;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: block;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.5s ease;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}
`;

function Header() {
    const { isOpen: isSidebarOpen } = useSidebarContext();
    const { isOpen: isSearchBarOpen, handleSearchInputOpen } = useSearchInputContext();

    return (
        <Wrapper type='wide'>
            <StyledHeader $isOpen={isSidebarOpen}>
                <Menu />
                <Link to='/'>
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
