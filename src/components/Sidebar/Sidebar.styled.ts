import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';

interface SidebarProps {
    $isOpen: boolean;
    $slideFrom: 'left' | 'right';
}

interface StyledOverlayProps {
    $isOpen: boolean;
}

export const StyledSidebar = styled.aside<SidebarProps>`
    background-color: var(--color-grey-0);
    position: absolute;
    width: 100%;
    min-height: 100dvh;
    transition: transform var(--animation-and-timing), opacity var(--animation-and-timing);
    opacity: 0;
    transform: translateY(-100%);
    border-left: var(--border-standard);
    z-index: 10;

    ${({ $slideFrom }) =>
        $slideFrom === 'left'
            ? css`
                  left: 0;
                  top: var(--header-height);
              `
            : css`
                  right: 0;
                  top: 0;

                  padding-top: 2rem;
              `}

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}
        

    @media ${device.tablet} {
        width: ${({ $slideFrom }) => ($slideFrom === 'right' ? '42rem' : '22rem')};
        max-width: 33.333333vw;

        position: absolute;
        top: 0;
        transform: translateX(-100%);
        opacity: 0;

        ${({ $slideFrom }) =>
            $slideFrom === 'left'
                ? css`
                      left: 0;
                      transform: translateX(-100%);
                      padding-top: 2rem;
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
    z-index: 1;

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
