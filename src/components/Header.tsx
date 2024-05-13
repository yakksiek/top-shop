import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import NavLinks from './NavLinks';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95vw;
    padding: 1.2rem 0;
    position: relative;
    height: 5.5rem;
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
