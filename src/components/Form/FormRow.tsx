import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface StylefFormRowProps {
    $marginBottom: boolean;
}

const StyledFormRow = styled.div<StylefFormRowProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ $marginBottom }) => ($marginBottom ? '1.5rem' : '0')};
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
    marginBottom?: boolean;
}

function FormRow({ label, error, children, isRequired, marginBottom = true }: FormRowProps) {
    const childElement = React.isValidElement(children) ? children : null;
    const htmlFor = childElement ? childElement.props.id : undefined;

    const renderRequiredInformation = isRequired ? '*' : '';

    return (
        <StyledFormRow $marginBottom={marginBottom}>
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
