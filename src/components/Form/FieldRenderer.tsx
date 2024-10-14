import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldConfig } from '../../features/dashboard/components/MyProfile/PersonalInformation';
import FormRow from './FormRow';

interface FieldRendererProps {
    fieldName: string;
    fieldConfig: FieldConfig;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ fieldName, fieldConfig }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const isRequired = 'validation' in fieldConfig && fieldConfig.validation && 'required' in fieldConfig.validation;

    const Component = fieldConfig.component;
    const errorMessage =
        typeof errors[fieldName] === 'string' ? errors[fieldName] : (errors[fieldName]?.message as string);

    return (
        <FormRow key={fieldName} label={fieldConfig.label} error={errorMessage} isRequired={isRequired}>
            <Component fieldConfig={fieldConfig} name={fieldName} control={control} />
        </FormRow>
    );
};

export default FieldRenderer;
