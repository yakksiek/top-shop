import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledVideoWrapper = styled.div`
    z-index: -1;
    position: sticky;
    top: 0;
    width: auto;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    @media ${device.mobile} {
        max-height: 85vh;
        overflow-x: hidden;
    }

    @media ${device.tablet} {
        top: var(--header-height);
        width: 100%;
        height: auto;
    }
`;

export const StyledVideoElement = styled.video`
    @media ${device.tablet} {
        width: 100%;
    }
`;

export const StyledCustomControls = styled.div`
    position: absolute;
    display: flex;
    gap: 0.1rem;
    justify-content: flex-end;
    top: 0;
    width: 100%;
    height: 2.5rem;
`;

export const StyledControlButton = styled.button`
    background-color: transparent;
    color: var(--color-grey-0);
    border: none;
    cursor: pointer;
    border-radius: 50%;
    aspect-ratio: 1;
    width: 40px;
    height: 40px;
`;
