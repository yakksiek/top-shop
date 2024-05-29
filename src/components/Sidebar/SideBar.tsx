import styled, { css } from 'styled-components';
import { useSidebarContext } from '../../contexts/SidebarContext';
import SidebarNavList from './SidebarNavList';
import { device } from '../../styles/breakpoints';
import mainMenu from '../../db/mainMenu.json';

interface SidebarProps {
    $isOpen: boolean;
}

const commonSidebarStyles = css<SidebarProps>`
    background-color: var(--color-grey-0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100dvh;
    padding: 1rem 4.5vw;
    transition: transform var(--animation-and-timing), opacity var(--animation-and-timing);
    opacity: 0;
    transform: translateY(-100%);
    border-right: var(--border-standard);

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}

    @media ${device.tablet} {
        min-width: 20vw;
        max-width: 20rem;
        padding: 5rem 0.5rem 1rem 3.5vw;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateX(0);
            `}
    }
`;

interface StyledOverlayProps {
    $isOpen: boolean;
}

const StyledSidebar = styled.aside<SidebarProps>`
    ${commonSidebarStyles}
    min-height: 100dvh;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            top: var(--header-height);
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

const Submenu = styled.aside<SidebarProps>`
    ${commonSidebarStyles}
    min-height: 100vh;
    transform: translateX(+100%);

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transform: translateX(0);
        `}

    @media ${device.tablet} {
        left: +100%;
        display: none;

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                display: block;
            `}
    }

    h2 {
        border-bottom: var(--border-standard);
    }
`;

function Sidebar() {
    const { isOpen, handleOpenMenu, category, handleOpenSubmenu } = useSidebarContext();

    console.log(category);

    return (
        <>
            <StyledOverlay onClick={handleOpenMenu} $isOpen={isOpen} />
            <StyledSidebar $isOpen={isOpen}>
                <SidebarNavList data={mainMenu.categories} type='menu' />
                <Submenu $isOpen={category ? true : false}>
                    <h2 onClick={() => handleOpenSubmenu()}>{category}</h2>
                    <SidebarNavList data={mainMenu.subcategories} type='submenu' />
                </Submenu>
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
