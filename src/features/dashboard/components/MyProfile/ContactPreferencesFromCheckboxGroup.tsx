import { useFormContext } from 'react-hook-form';
import Checkbox from '../../../../components/Checkbox';
import { CheckboxGroupConfig, FormValues } from './PersonalInformation';

interface ContactPreferencesFromCheckboxGroupProps {
    name: keyof FormValues;
    fieldConfig: CheckboxGroupConfig;
}

function ContactPreferencesFromCheckboxGroup({ name, fieldConfig }: ContactPreferencesFromCheckboxGroupProps) {
    const { register } = useFormContext();

    return (
        <div>
            {fieldConfig.options.map(option => (
                <Checkbox
                    key={option.value}
                    name={name}
                    value={option.value}
                    label={option.label}
                    register={register}
                />
            ))}
        </div>
    );
}

export default ContactPreferencesFromCheckboxGroup;
