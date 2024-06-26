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
    position: fixed;
    width: 100%;
    height: 100%;
    transition: transform var(--animation-and-timing), opacity var(--animation-and-timing);
    border-left: var(--border-standard);
    opacity: 0;

    ${({ $slideFrom }) =>
        $slideFrom === 'left'
            ? css`
                  left: 0;
                  transform: translateY(-100%);
              `
            : css`
                  right: 0;
                  transform: translateX(100%);
              `}

    ${({ $slideFrom, $isOpen }) =>
        $isOpen && $slideFrom === 'left'
            ? css`
                  left: 0;
                  top: var(--header-height);
                  z-index: 10;
                  transform: translateY(0);
              `
            : css`
                  right: 0;
                  top: 0;
                  padding-top: 2rem;
                  z-index: 15;
              `}

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            transform: translateX(0);
        `}
        

    @media ${device.tablet} {
        top: 0;
        z-index: 10;

        ${({ $slideFrom }) =>
            $slideFrom === 'left'
                ? css`
                      padding-top: 2rem;
                      transform: translateX(-100%);
                      width: 22rem;
                      max-width: 33.333333vw;
                  `
                : css`
                      width: 42rem;
                      transform: translateX(100%);
                      max-width: 45vw;
                  `}

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateX(0);
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
