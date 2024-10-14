import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
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
    error?: string;
    children: ReactNode;
    isRequired?: boolean;
}

function FormRow({ label, error, children, isRequired }: FormRowProps) {
    const childElement = React.isValidElement(children) ? children : null;
    const htmlFor = childElement ? childElement.props.id : undefined;

    const renderRequiredInformation = isRequired ? '*' : '';

    return (
        <StyledFormRow>
            {label && (
                <StyledLabel htmlFor={htmlFor}>
                    {label}
                    {renderRequiredInformation}
                </StyledLabel>
            )}
            {children}
            {error && <StyledError>{error}</StyledError>}
        </StyledFormRow>
    );
}

export default FormRow;
