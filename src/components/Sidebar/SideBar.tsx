import styled, { css } from 'styled-components';
import { GoArrowLeft } from 'react-icons/go';

import { useSidebarContext } from '../../contexts/SidebarContext';
import SidebarNavList from './SidebarNavList';
import { device } from '../../styles/breakpoints';
import mainMenu from '../../db/mainMenu.json';

interface SidebarProps {
    $isOpen: boolean;
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

const StyledSidebar = styled.aside<SidebarProps>`
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
    border-left: var(--border-standard);

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            transform: translateY(0);
            top: var(--header-height);
        `}

    @media ${device.tablet} {
        min-width: 20vw;
        max-width: 16rem;
        padding: 5rem 0.5rem 1rem 3.5vw;
        position: absolute;
        top: 0;
        /* left: 0; */
        transform: translateX(-100%);
        opacity: 0;
        /* display: none; */

        right: 0; /* Position it from the right */
        transform: translateX(100%); /* Move it off-screen to the right */

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateX(0);
                display: block;
                opacity: 1;
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

const Submenu = styled(StyledSidebar)<SidebarProps>`
    transform: translateX(+100%);
    top: 0;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transform: translateX(0);
        `}

    @media ${device.tablet} {
        left: 100%;
        display: none;

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                display: block;
            `}
    }
`;

const StyledHeader = styled.header`
    border-bottom: var(--border-standard);
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    & > svg {
        font-size: 1.5rem;

        @media ${device.tablet} {
            display: none;
        }
    }
`;

function Sidebar() {
    const {
        isOpen,
        toggleSidebar,
        activeMainCategory,
        activeSubCategory,
        setActiveSubCategory,
        setActiveMainCategory,
    } = useSidebarContext();

    return (
        <>
            <StyledOverlay onClick={toggleSidebar} $isOpen={isOpen} />
            <StyledSidebar $isOpen={isOpen}>
                <SidebarNavList
                    data={mainMenu.categories}
                    type='menu'
                    clickHandler={setActiveMainCategory}
                    activeCategory={activeMainCategory}
                />
                <Submenu $isOpen={activeMainCategory ? true : false}>
                    <StyledHeader onClick={() => setActiveMainCategory('')}>
                        <GoArrowLeft />
                        <h2>{activeMainCategory}</h2>
                    </StyledHeader>
                    <SidebarNavList
                        data={mainMenu.subcategories}
                        type='submenu'
                        clickHandler={setActiveSubCategory}
                        activeCategory={activeSubCategory}
                    />
                    <Submenu $isOpen={activeSubCategory ? true : false}>
                        <StyledHeader onClick={() => setActiveSubCategory('')}>
                            <GoArrowLeft />
                            <h2>{activeSubCategory}</h2>
                        </StyledHeader>
                    </Submenu>
                </Submenu>
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
