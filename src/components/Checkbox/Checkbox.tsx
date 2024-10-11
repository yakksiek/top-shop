import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../features/dashboard/components/MyProfile/PersonalInformation';
import { Checkmark } from '../../shared/icons';
import { StyledCheckboxWrapper, CheckboxLabel, StyledCheckbox } from './Checkbox.styled';

interface CheckboxProps {
    label: string;
    value: string;
    name: keyof FormValues;
    disabled?: boolean;
    register: UseFormRegister<FormValues>;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, value, disabled = false, register }) => {
    return (
        <StyledCheckboxWrapper>
            <CheckboxLabel $disabled={disabled}>
                <StyledCheckbox value={value} {...register(name)} disabled={disabled} />
                <Checkmark />
                {label}
            </CheckboxLabel>
        </StyledCheckboxWrapper>
    );
};

export default Checkbox;
