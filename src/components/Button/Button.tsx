import React from 'react';
import styled, { css } from 'styled-components';

type ButtonTypes = 'submit' | 'button';

interface StyledButtonProps {
    $fill: boolean;
    type: ButtonTypes;
}

const StyledButton = styled.button<StyledButtonProps>`
    border: none;
    background-color: transparent;
    padding: 0.8125rem 2rem;
    border-radius: 100vmax;
    cursor: pointer;
    text-align: center;
    min-height: 3rem;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 0.025rem;
    line-height: 1.25rem;
    margin: 1.5rem 0;

    outline: 1px solid var(--color-black);
    transition: 0.1s outline linear;

    &:hover {
        outline: 2px solid var(--color-black);
    }

    &:focus {
        outline: 2px solid var(--color-black);
        box-shadow: 0 0 0 2px #ffffff, 0 0 2px 3px var(--color-black);
    }

    ${({ $fill }) =>
        $fill &&
        css`
            background-color: var(--color-black);
            color: var(--color-grey-0);
            transition: background-color 0.1s;

            &:hover,
            &:focus {
                background-color: var(--color-grey-0);
                color: var(--color-black);
            }

            &:focus {
                outline: 2px solid var(--color-black);
                box-shadow: 0 0 0 2px #ffffff, 0 0 2px 3px var(--color-black);
            }
        `}
`;

interface ButtonProps {
    fill: boolean;
    children: React.ReactNode;
    type?: ButtonTypes;
}

function Button({ fill, children, type = 'button' }: ButtonProps) {
    return (
        <StyledButton $fill={fill} type={type}>
            {children}
        </StyledButton>
    );
}

export default Button;
