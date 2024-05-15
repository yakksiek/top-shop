import styled from 'styled-components';

export const AccordionContainer = styled.div`
    width: 95vw;
    display: block;
    margin: 0 auto;
`;

export const CategoryItem = styled.div`
    padding: 1rem 0;
    border-top: var(--border-standard);
    cursor: pointer;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
`;

export const Title = styled.h5`
    font-weight: 400;
    display: flex;
    align-items: center;
`;

export const CategoryDetailsListItem = styled.li`
    margin: 0.5rem 1rem 1.5rem;
`;

export const Content = styled.div`
    display: grid;
    transition: 500ms grid-template-rows ease;
    grid-template-rows: 0fr;

    &.open {
        grid-template-rows: 1fr;
    }

    ul {
        overflow: hidden;
    }
`;
