import styled, { css } from 'styled-components';
import { device } from '../../../styles/breakpoints';
import { DASHBOARD_NAVIGATION_Z_INDEX } from '../../../constants/z-indexes';

interface StyledMenuButtonProps {
    $isOpen: boolean;
}

interface StyledListWrapperProps {
    $isOpen: boolean;
}

interface StyledMenuListProps {
    $isOpen: boolean;
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

export const StyledNavigation = styled.nav`
    --horizontal-padding-mobile: 7.5vw;
    border-top: var(--border-standard);
    border-bottom: var(--border-standard);
    height: var(--header-height);
    position: relative;
    padding: 0 var(--horizontal-padding-mobile);
    z-index: ${DASHBOARD_NAVIGATION_Z_INDEX};

    @media ${device.tablet} {
        display: flex;
        justify-content: space-between;
        padding: 0 var(--padding-horizontal-nav-tablet);
    }

    @media ${device.desktop} {
        padding: 0 var(--padding-horizontal-nav-desktop);
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media ${device.tablet} {
        padding: 0;
    }
`;

export const StyledMenuButton = styled.button<StyledMenuButtonProps>`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        transition: transform 0.15s ease;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: rotate(180deg);
            `}
    }

    @media ${device.tablet} {
        display: none;
    }
`;

export const StyledListWrapper = styled.div<StyledListWrapperProps>`
    display: grid;
    justify-content: center;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-in-out;
    border-top: var(--border-standard);
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? 'auto' : '0')};

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            grid-template-rows: 1fr;
            height: auto;
        `}

    @media ${device.tablet} {
        grid-template-rows: 1fr;
        width: auto;
        border: none;
        height: auto;
    }
`;

export const StyledMenuItemList = styled.ul<StyledMenuListProps>`
    background-color: var(--color-grey-0);
    width: 100%;
    padding: 0 var(--horizontal-padding-mobile);
    overflow: hidden;

    li {
        cursor: pointer;
        border-bottom: var(--border-standard);
        padding: 1rem 0;
        font-size: 0.75rem;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    @media ${device.tablet} {
        display: flex;
        height: 100%;
        padding: 0;

        li {
            border-bottom: none;
            border-left: var(--border-standard);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;

            &:hover {
                border-bottom: 1px solid black;
            }

            &.active {
                border-bottom: 1.5px solid black;
            }

            a,
            button {
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 2rem;
            }
        }
    }
`;

export const StyledOverlay = styled.div<StyledOverlayProps>`
    width: 100vw;
    height: 100vh;
    position: block;
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

    @media ${device.tablet} {
        display: none;
    }
`;
