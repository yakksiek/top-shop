import styled from 'styled-components';

const StyledInput = styled.input`
    border: var(--border-standard);
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;

    &:focus {
        border-color: var(--color-black);
    }
`;

export default StyledInput;
