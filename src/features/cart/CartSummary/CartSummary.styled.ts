import styled from 'styled-components';

export const StyledWrapper = styled.div`
    background-color: #faf9f8;
    padding: 1.5rem;
`;

export const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
        font-size: 1rem;
    }

    .discount-label {
        font-size: 0.75rem;
    }

    .discount-button {
        background-color: transparent;
        border: none;
        text-decoration: underline;
        font-size: 0.75rem;
    }

    &.total {
        border-top: 1px solid var(--color-black);
        padding: 1rem 0;

        span {
            font-size: 1rem;
            font-weight: 600;
        }
    }
`;

export const StyledHeader = styled.div`
    margin-bottom: 1rem;
    border-bottom: var(--border-standard);
`;

export const StyledSummary = styled.div`
    margin-bottom: 1rem;
`;

export const StyledPaymentInfoWrapper = styled.div`
    p {
        font-size: 0.75rem;
        color: var(--color-grey-500);
        margin-bottom: 0.25rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
`;
