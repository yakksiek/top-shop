import styled, { css } from 'styled-components';
import { useSidebarContext } from '../../contexts/SidebarContext';
import NavList from './SidebarNavList';
import { device } from '../../styles/breakpoints';

interface StyledSidebarProps {
    $isOpen: boolean;
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

const StyledSidebar = styled.aside<StyledSidebarProps>`
    background-color: var(--color-grey-0);
    width: 100vw;
    padding: 1rem 4.5vw;
    position: fixed;
    left: 0;
    top: 0;
    transition: transform var(--animation-and-timing), opacity var(--animation-and-timing);
    opacity: 0;
    transform: translateY(-100%);

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            top: var(--header-height);
            opacity: 1;
            transform: translateY(0);
        `}

    @media ${device.tablet} {
        transform: translateX(-100%);
        width: 29vw;
        max-width: 24rem;
        min-height: 100dvh;
        padding: 5rem 0.5rem 1rem 3.5vw;
        position: absolute;
        top: 0;
        left: 0;

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateX(0);
            `}
    }
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
    transition: opacity var(--animation-and-timing);
    visibility: hidden;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}

    @media ${device.mobile} {
        width: 0;
        height: 0;
    }
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
