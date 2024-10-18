import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Checkmark } from '../../shared/icons';
import { CheckboxLabel, StyledCheckbox, StyledCheckboxWrapper } from './Checkbox.styled';

interface CheckboxProps<T extends FieldValues> {
    label: string;
    value?: string;
    name: Path<T>;
    disabled?: boolean;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T, Path<T>>;
}

const Checkbox = <T extends FieldValues>({
    name,
    label,
    value,
    disabled = false,
    register,
    rules = {},
}: CheckboxProps<T>) => {
    return (
        <StyledCheckboxWrapper>
            <CheckboxLabel $disabled={disabled}>
                <StyledCheckbox type='checkbox' value={value} {...register(name, rules)} disabled={disabled} />
                <Checkmark />
                {label}
            </CheckboxLabel>
        </StyledCheckboxWrapper>
    );
};

export default Checkbox;
