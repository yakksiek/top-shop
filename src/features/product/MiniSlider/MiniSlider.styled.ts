import styled from 'styled-components';

export const StyledMediaScroller = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    &::-webkit-scrollbar {
        height: 1px;
        width: 0;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-grey-200);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-black);
    }
`;

export const StyledMediaItem = styled.li`
    scroll-snap-align: start;
    height: 60vh;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
