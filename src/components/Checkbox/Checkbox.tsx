import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { Checkmark } from '../../shared/icons';
import { StyledCheckboxWrapper, CheckboxLabel, StyledCheckbox } from './Checkbox.styled';
import { FormValues } from '../../db/PersonalInformationFormData';

interface CheckboxProps {
    label: string;
    value: string;
    name: keyof FormValues;
    disabled?: boolean;
    register: UseFormRegister<FieldValues>;
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
