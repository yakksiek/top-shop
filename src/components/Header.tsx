import styled, { css } from 'styled-components';
import { device } from '../styles/breakpoints';
import Logo from './Logo';
import Menu from './Menu';
import NavLinks from './NavLinks';
import { useSidebarContext } from '../contexts/SidebarContext';

interface StyledHeaderProps {
    $isOpen: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95vw;
    padding: 1.2rem 0;
    position: relative;
    height: var(--header-height);

    @media ${device.mobile} {
        width: 100vw;
        padding: 1.2rem 1rem;
        z-index: 10;
        background-color: var(--color-grey-0);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                border-bottom: 1px solid var(--color-grey-200);
            `}
    }
`;

function Header() {
    const { isOpen } = useSidebarContext();

    return (
        <StyledHeader $isOpen={isOpen}>
            <Menu />
            <Logo />
            <NavLinks />
        </StyledHeader>
    );
}

export default Header;
