import styled from 'styled-components';

interface StyledInputWrapperProps {
    type?: 'header';
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
    width: 95vw;
    margin: 0 auto;
    display: block;
    padding: ${props => (props.type !== 'header' ? '0 0 1rem 0' : '1rem 0')};
    max-width: 40rem;
`;

export const StyledInputContainer = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    width: 100%;
    border-radius: 100vmax;
    padding: 0 1rem 0 2.75rem;
    border: 1px solid var(--color-grey-200);
    height: 2.75rem;
    transition: border 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    font-size: 0.9rem;
    font-style: italic;
    transition: border-color var(--animation-and-timing);

    &:focus {
        border-color: var(--color-black);
    }
`;

export const StyledIconWrapper = styled.span`
    position: absolute;
    font-size: 18px;
    height: 100%;
    top: 50%;
    left: 1rem;
    transform: translate(0, -25%);
`;

export const StyledButton = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    top: 50%;
    transform: translate(0, -50%);
    right: -3rem;
`;
