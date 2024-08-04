import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: relative;
`;

const StyledLabel = styled.label`
    font-size: 0.75rem;
    font-weight: 300;
    margin-bottom: 0.25rem;
`;

const StyledError = styled.span`
    font-size: 0.75rem;
    color: var(--color-red-700);
`;

interface FormRowProps {
    label?: string;
    error?: string | undefined | FieldError;
    children: ReactNode;
}

function FormRow({ label, error, children }: FormRowProps) {
    const childElement = React.isValidElement(children) ? children : null;
    const htmlFor = childElement ? childElement.props.id : undefined;
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
        <StyledFormRow>
            {label && <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>}
            {children}
            {error && <StyledError>{errorMessage}</StyledError>}
        </StyledFormRow>
    );
}

export default FormRow;
