import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';

interface StyledSearchbarContainerProps {
    $isOpen: boolean;
}

export const StyledSearchbarContainer = styled.div<StyledSearchbarContainerProps>`
    position: fixed;
    background-color: var(--color-grey-0);
    z-index: 16;
    width: 100%;
    left: 0;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease, opacity 0.3s ease;

    @media ${device.mobile} {
        top: 0;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                top: var(--header-height);
                opacity: 1;
                transform: translateY(0);
            `}
    }

    @media ${device.tablet} {
        top: -100%;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                top: 0;
                opacity: 1;
                transform: translateY(0);
            `}
    }
`;

export const StyledSearchbarWrapper = styled.div`
    border-bottom: 1px solid var(--color-grey-200);
    margin-bottom: 1rem;
`;

interface StyledOverlayProps {
    $isOpen: boolean;
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: block;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.5s ease;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}
`;

export const StyledFlexContainer = styled.div`
    overflow-y: auto;
    max-height: 100dvh;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`;

export const StyledWrapper = styled.div`
    padding: 3rem;

    h2 {
        font-size: 0.75rem;
        text-transform: uppercase;
        text-align: left;
        font-weight: 200;
        margin-bottom: 1.5rem;
    }
`;

export const StyledNavigationList = styled.ul`
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: 1.25rem;
        font-size: 0.85rem;
        font-weight: 400;
    }
`;

export const StyledProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;
