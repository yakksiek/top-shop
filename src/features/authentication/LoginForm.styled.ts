import styled from 'styled-components';

export const StyledForgotPassButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 0.75rem;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start;
    padding: 1px;

    &:focus {
        outline: 1px solid var(--color-black);
    }
`;
