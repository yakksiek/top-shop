import styled from 'styled-components';

export const StyledCartItem = styled.li`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 1rem;
    margin-bottom: 1.5rem;

    &:not(:last-of-type) {
        border-bottom: var(--border-standard);
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h4,
    p {
        font-size: 1rem;
        letter-spacing: 0.0625rem;
    }

    p {
        font-size: 0.85rem;
    }

    .remove-btn {
        cursor: pointer;
    }
`;

export const StyledCartItemDetailsList = styled.ul`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledCartItemDetail = styled.li`
    flex: 1 1 50%;
    font-size: 0.65rem;
    letter-spacing: 0.05rem;

    span:not(:first-child) {
        margin-left: 5px;
    }
`;
