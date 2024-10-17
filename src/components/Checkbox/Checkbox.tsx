import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Checkmark } from '../../shared/icons';
import { CheckboxLabel, StyledCheckbox, StyledCheckboxWrapper } from './Checkbox.styled';

interface CheckboxProps<T extends FieldValues> {
    label: string;
    value: string;
    name: Path<T>;
    disabled?: boolean;
    register: UseFormRegister<T>;
}

const Checkbox = <T extends FieldValues>({ name, label, value, disabled = false, register }: CheckboxProps<T>) => {
    return (
        <StyledCheckboxWrapper>
            <CheckboxLabel $disabled={disabled}>
                <StyledCheckbox type='checkbox' value={value} {...register(name)} disabled={disabled} />
                <Checkmark />
                {label}
            </CheckboxLabel>
        </StyledCheckboxWrapper>
    );
};

export default Checkbox;
