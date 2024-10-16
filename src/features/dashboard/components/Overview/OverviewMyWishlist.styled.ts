import styled from 'styled-components';

export const StyledItemsIndicator = styled.div`
    margin-bottom: 1rem;
    font-size: 0.875rem;
`;

export const StyledScrollerContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr;

    &:hover {
        .scroller__btn {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export const StyledMediaScroller = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc(55% - 4.5rem);
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    gap: 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;
