import React from 'react';
import styled, { css } from 'styled-components';

type ButtonTypes = 'submit' | 'button';
type ButtonWidth = 'medium';

const BUTTON_WIDTH: Record<ButtonWidth, string> = {
    medium: '300px',
};

interface StyledButtonProps {
    $fill: boolean;
    type: ButtonTypes;
    $width?: ButtonWidth;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: ${({ $width }) => ($width ? BUTTON_WIDTH[$width] : '100%')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    background-color: transparent;
    padding: 0.8125rem 2rem;
    border-radius: 100vh;
    cursor: pointer;
    text-align: center;
    min-height: 3rem;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    line-height: 1.25rem;
    margin: 1rem 0;

    outline: 1px solid var(--color-black);
    transition: 0.1s outline linear;

    &:hover {
        outline: 2px solid var(--color-black);
    }

    &:focus {
        outline: 2px solid var(--color-black);
        box-shadow: 0 0 0 3px white, 0 0 0 4.25px rgba(0, 0, 0, 0.7);
    }

    &:disabled {
        pointer-events: none;
        outline: 1px solid var(--color-grey-400);
        color: var(--color-grey-400);
    }

    ${({ $fill }) =>
        $fill &&
        css`
            background-color: var(--color-black);
            color: var(--color-grey-0);
            transition: background-color 0.3s;
            outline: none;

            &:hover,
            &:focus {
                background-color: var(--color-grey-0);
                color: var(--color-black);
            }

            &:disabled {
                background-color: var(--color-grey-300);
                color: var(--color-grey-500);
                pointer-events: none;
            }
        `}
`;

interface ButtonProps {
    fill?: boolean;
    children: React.ReactNode;
    type?: ButtonTypes;
    onClick?: () => void;
    isDisabled?: boolean;
    width?: ButtonWidth;
}

function Button({ fill = false, children, type = 'button', onClick, isDisabled, width }: ButtonProps) {
    return (
        <StyledButton
            $fill={fill}
            type={type}
            onClick={onClick}
            disabled={isDisabled ? isDisabled : false}
            $width={width}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
