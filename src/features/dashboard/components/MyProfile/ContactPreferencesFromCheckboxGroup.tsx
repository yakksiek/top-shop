import { useFormContext } from 'react-hook-form';
import Checkbox from '../../../../components/Checkbox';
import { CheckboxGroupConfig, FormValues } from '../../../../db/PersonalInformationFormData';

interface ContactPreferencesFromCheckboxGroupProps {
    name: keyof FormValues;
    fieldConfig: CheckboxGroupConfig;
}

function ContactPreferencesFromCheckboxGroup({ name, fieldConfig }: ContactPreferencesFromCheckboxGroupProps) {
    const { register } = useFormContext<FormValues>();

    return (
        <div>
            {fieldConfig.options.map(option => (
                <Checkbox<FormValues>
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
