import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';
import { HEADER_SEARCHBAR_MOBILE_Z_INDEX, HEADER_SEARCHBAR_TABLET_Z_INDEX } from '../../contants/z-indexes';

interface StyledSearchbarWrapperProps {
    $isOpen: boolean;
}

export const StyledSearchbarWrapper = styled.div<StyledSearchbarWrapperProps>`
    border-bottom: 1px solid var(--color-grey-200);
    height: var(--header-height);
    position: fixed;
    background-color: var(--color-grey-0);
    width: 100%;
    left: 0;
    transform: translateY(-200%);
    z-index: ${HEADER_SEARCHBAR_MOBILE_Z_INDEX};
    transition: transform var(--animation-and-timing);
    display: flex;
    align-items: center;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            top: calc(5.5rem - 1px);
            transform: translateY(0);
        `}

    @media ${device.tablet} {
        z-index: ${HEADER_SEARCHBAR_TABLET_Z_INDEX};
        transform: translateY(-200%);
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: translateY(-100%);
            `}
    }
`;

interface StyledFlexContainerProps {
    $isOpen: boolean;
}

export const StyledContainer = styled.div<StyledFlexContainerProps>`
    width: 100%;
    display: grid;
    transition: var(--animation-and-timing) grid-template-rows;
    position: fixed;
    background-color: var(--color-grey-0);
    top: 0;
    left: 0;
    grid-template-rows: 0fr;
    z-index: ${HEADER_SEARCHBAR_MOBILE_Z_INDEX};

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            top: calc(5.5rem - 1px);
            grid-template-rows: 1fr;
            transform: translateY(0);
            transition-delay: 0.3s;
            overflow-y: auto;
            height: calc(100vh - 11rem);

            @media ${device.mobile} {
                top: calc(11rem - 1px);
            }

            @media ${device.tablet} {
                z-index: ${HEADER_SEARCHBAR_TABLET_Z_INDEX};
                transition-delay: 0.3s;
                height: auto;
            }
        `}
`;

export const StyledGridContainer = styled.div`
    overflow-y: auto;
    margin: 0 auto;
    width: 100%;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    @media ${device.desktop} {
        max-width: var(--screen-width-small);
    }
`;

export const StyledWrapper = styled.div`
    padding: 1rem;
    h2 {
        font-size: 0.75rem;
        text-transform: uppercase;
        text-align: left;
        font-weight: 200;
        margin-bottom: 1.5rem;
    }

    @media ${device.tablet} {
        padding: 3rem;
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
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity var(--animation-and-timing);
    visibility: hidden;
    z-index: 2;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}
`;
