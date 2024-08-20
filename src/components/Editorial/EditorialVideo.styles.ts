import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

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
