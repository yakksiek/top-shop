import styled from 'styled-components';

export const StyledVideoContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
`;

export const StyledVideoElement = styled.video`
    width: 100%;
    height: auto;
`;

export const StyledCustomControls = styled.div`
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledControlButton = styled.button`
    background-color: transparent;
    color: var(--color-grey-0);
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    aspect-ratio: 1;
    width: 40px;
    height: 40px;
`;
