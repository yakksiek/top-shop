import styled, { css } from 'styled-components';
import BaseInputStyles from '../BaseInputStyles';
import { ArrowDown } from '../../shared/icons';
import { forwardRef, useState } from 'react';

interface StyledWrapper {
    $isOpen: boolean;
}

const StyledWrapper = styled.div<StyledWrapper>`
    position: relative;

    .arrow-icon {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translate(0, -50%);

        ${({ $isOpen }) =>
            $isOpen &&
            css`
                transform: rotate(180deg);
            `}
    }
`;

const StyledSelect = styled.select`
    ${BaseInputStyles}

    width: 100%;
    appearance: none; /* Hide default arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 2.5rem; /* Add space for the custom arrow */
`;

export interface SelectFieldConfig {
    type: 'select';
    label: string;
    options: string[];
    validation: {
        required: string;
    };
}

interface SelectProps {
    fieldConfig: SelectFieldConfig;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ fieldConfig, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFocus = () => setIsOpen(true);
    const handleBlur = () => setIsOpen(false);

    return (
        <StyledWrapper $isOpen={isOpen}>
            <StyledSelect ref={ref} onFocus={handleFocus} onBlur={handleBlur} defaultValue='' onChange={onChange}>
                <option value='' disabled>
                    Select
                </option>
                {fieldConfig.options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </StyledSelect>
            <ArrowDown className='arrow-icon' />
        </StyledWrapper>
    );
});

export default Select;
