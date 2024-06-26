import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

export const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
    font-size: 0.75rem;
    font-weight: 300;
    margin-bottom: 0.25rem;
`;

export const StyledInput = styled.input`
    border: var(--border-standard);
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;

    &:focus {
        border-color: var(--color-black);
    }
`;

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

export const StyledSeparator = styled.div`
    padding: 0;
    border-top: var(--border-standard);
    height: 1rem;
`;
