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
            top: var(--header-height);
            transform: translateY(0%);
        `}

    @media ${device.tablet} {
        z-index: ${HEADER_SEARCHBAR_TABLET_Z_INDEX};
        transform: translateY(-300%);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                top: 0;
                transform: translateY(0%);
            `};
    }
`;

interface StyledFlexContainerProps {
    $isOpen: boolean;
}

export const StyledContainer = styled.div<StyledFlexContainerProps>`
    width: 100%;
    display: grid;
    position: fixed;
    background-color: var(--color-grey-0);
    left: 0;
    transform: translateY(-200%);
    transition: var(--animation-and-timing) transform;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transition-delay: 0.3s;
            overflow-y: auto;
            transform: translateY(0);

            @media ${device.mobile} {
                z-index: calc(${HEADER_SEARCHBAR_MOBILE_Z_INDEX} - 1);
                top: calc(var(--header-height) * 2);
                height: calc(100dvh - 11rem);
            }

            @media ${device.tablet} {
                z-index: calc(${HEADER_SEARCHBAR_TABLET_Z_INDEX} - 1);
                transition-delay: 0.3s;
                grid-template-columns: 1fr 2fr;
                padding: 0 5vw;
            }
        `}
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
