import styled, { css } from 'styled-components';

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;

    input[type='checkbox']:disabled {
        border-color: var(--color-disabled);
        background-color: var(--color-disabled);
    }

    svg {
        position: absolute;
        left: 2px;
        display: none;
        font-size: 0.75rem;
    }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 0.25em;
    margin-right: 0.5em;
    border: 1px solid var(--color-black);
    outline: none;
    cursor: pointer;

    &:checked {
        position: relative;

        & + svg {
            display: block;
        }
    }

    &:disabled {
        border-color: var(--color-disabled);
        background-color: var(--color-disabled);
        cursor: not-allowed;
    }

    &:focus {
        border: 1.5px solid var(--color-black);
        box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(0, 0, 0, 0.7);
    }
`;

export const CheckboxLabel = styled.label<{ $disabled: boolean }>`
    font-size: 0.875rem;
    display: flex;
    align-items: center;

    &:hover {
        input {
            border: 1.5px solid var(--color-black);
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--color-disabled);
        `}
`;
