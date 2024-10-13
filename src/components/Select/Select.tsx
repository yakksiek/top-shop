import { forwardRef } from 'react';
import styled from 'styled-components';
import { ArrowDown } from '../../shared/icons';
import BaseInputStyles from '../BaseInputStyles';

const StyledWrapper = styled.div`
    position: relative;

    .arrow-icon {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translate(0, -50%);
    }
`;

const StyledSelect = styled.select`
    ${BaseInputStyles}

    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 2.5rem;

    font-size: var(--font-inputs);
`;

export interface SelectFieldConfig {
    options: string[];
}

interface SelectProps {
    fieldConfig: SelectFieldConfig;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ fieldConfig, onChange }, ref) => {
    return (
        <StyledWrapper>
            <StyledSelect ref={ref} defaultValue='' onChange={onChange}>
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
