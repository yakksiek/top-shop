import { css } from 'styled-components';

const BaseInputStyles = css`
    border: var(--border-standard);
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;

    &:focus {
        border-color: var(--color-black);
    }
`;

export default BaseInputStyles;
