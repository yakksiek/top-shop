import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import FormRow from './FormRow';
import { FieldConfig } from '../../db/PersonalInformationFormData';

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

    const errorObject = errors[fieldName] as FieldError | undefined;
    const errorMessage = errorObject?.message || '';

    return (
        <FormRow key={fieldName} label={fieldConfig.label} error={errorMessage} isRequired={isRequired}>
            <Component fieldConfig={fieldConfig} name={fieldName} control={control} />
        </FormRow>
    );
};

export default FieldRenderer;
