import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ArrowDown } from '../../shared/icons';
import BaseInputStyles from '../BaseInputStyles';
import { SelectFieldConfig } from '../../db/PersonalInformationFormData';
import { BasicFieldConfig } from '../../db/datePickerData';

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

interface SelectProps {
    fieldConfig: SelectFieldConfig | BasicFieldConfig;
    name: string;
    id?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ fieldConfig, name, onChange, defaultValue = '' }) => {
    const { register } = useFormContext();

    const props = onChange ? { onChange } : { ...register(name, fieldConfig.validation) };

    return (
        <StyledWrapper>
            <StyledSelect defaultValue={defaultValue} {...props}>
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
};

export default Select;
