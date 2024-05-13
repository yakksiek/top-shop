import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import NavLinks from './NavLinks';
import { device } from '../styles/breakpoints';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95vw;
    padding: 1.2rem 0;
    position: relative;
    height: var(--header-height);

    @media ${device.mobile} {
        border-bottom: 1px solid var(--color-grey-300);
        width: 100vw;
        padding: 1.2rem 1rem;
        z-index: 10;
        background-color: var(--color-grey-0);
    }
`;

function Header() {
    return (
        <StyledHeader>
            <Menu />
            <Logo />
            <NavLinks />
        </StyledHeader>
    );
}

export default Header;
