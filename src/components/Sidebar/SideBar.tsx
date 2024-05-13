import styled, { css } from 'styled-components';
import { useSidebarContext } from '../../contexts/SidebarContext';
import NavList from './SidebarNavList';

interface StyledSidebarProps {
    $isOpen: boolean;
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

const StyledSidebar = styled.aside<StyledSidebarProps>`
    background-color: var(--color-grey-0);
    z-index: 3;
    translate: -100%;
    transition: translate var(--hamburger-animation-timing);
    width: 11rem;
    width: 29vw;
    max-width: 14rem;
    max-width: 30vw;
    min-height: 100dvh;
    padding: 5rem 0.5rem 1rem 3.5vw;
    position: absolute;
    top: 0;
    left: 0;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            translate: 0;
        `}
`;

const StyledOverlay = styled.div<StyledOverlayProps>`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity var(--hamburger-animation-timing);
    visibility: hidden;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}
`;

function Sidebar() {
    const { isOpen, handleOpenMenu } = useSidebarContext();

    return (
        <>
            <StyledOverlay onClick={handleOpenMenu} $isOpen={isOpen} />
            <StyledSidebar $isOpen={isOpen}>
                <NavList />
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
