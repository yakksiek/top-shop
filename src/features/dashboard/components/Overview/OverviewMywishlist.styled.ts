import styled from 'styled-components';

export const StyledItemsIndicator = styled.div`
    margin-bottom: 1rem;
    font-size: 0.875rem;
`;

export const StyledScrollerContainer = styled.div`
    position: relative;

    .scroller__btn {
        transition: opacity 0.5s ease, visibility 0.3s ease;
        opacity: 0;
        visibility: hidden;
    }

    &:hover {
        .scroller__btn {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export const StyledMediaScroller = styled.ul`
    --grid-gap: 1rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc(50% - 4.5rem);
    overflow-x: hidden;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    gap: var(--grid-gap);
`;
