import { css } from 'styled-components';

const BaseInputStyles = css`
    border: var(--border-standard);
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;
    transition: border 0.3s ease-out;

    &:focus {
        border-color: var(--color-black);
    }

    &:hover {
        border: 1px solid var(--color-black);
    }
`;

export default BaseInputStyles;
