import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';

interface SidebarProps {
    $isOpen: boolean;
    slideFrom: 'left' | 'right';
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

export const StyledSidebar = styled.aside<SidebarProps>`
    background-color: var(--color-grey-0);
    position: absolute;
    top: 0;
    /* left: 0; */
    // if from right
    // right: 0
    width: 100%;
    min-height: 100dvh;
    padding: 1rem 4.5vw;
    transition: transform var(--animation-and-timing), opacity var(--animation-and-timing);
    opacity: 0;
    transform: translateY(-100%);
    border-left: var(--border-standard);
    ${({ slideFrom }) =>
        slideFrom === 'left'
            ? css`
                  left: 0;
              `
            : css`
                  right: 0;
              `}

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
        transform: translateX(-100%);
        opacity: 0;

        // FROM RIGHT
        /* right: 0; /* Position it from the right */

        ${({ slideFrom }) =>
            slideFrom === 'left'
                ? css`
                      left: 0;
                      transform: translateX(-100%);
                  `
                : css`
                      right: 0;
                      transform: translateX(100%);
                  `}

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateX(0);
                display: block;
                opacity: 1;
            `}
    }
`;

export const StyledOverlay = styled.div<StyledOverlayProps>`
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