import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button';
import Checkbox from '../../../../components/Checkbox';
import DatePicker from '../../../../components/DatePicker';
import { FormRow, Input, StyledForm } from '../../../../components/Form';
import * as h from '../../../../utils/helpers';
import PhoneNumberInput from '../../../../components/PhoneNumberInput';
import Select from '../../../../components/Select';

interface SelectFieldConfig {
    type: 'select';
    label: string;
    options: string[];
    validation: {
        required: string;
    };
}

interface TextFieldConfig {
    type: 'text';
    label: string;
    validation: {
        required: string;
        minLength?: { value: number; message: string };
    };
    component: React.ElementType;
}

interface DateFieldConfig {
    type: 'date';
    label: string;
    validation: { validate: (value: null | undefined | Date) => boolean | 'This birthday is invalid' };
    component: React.ElementType;
}

interface CheckboxGroupConfig {
    type: 'checkbox-group';
    label: string;
    options: { value: string; label: string }[];
    component: React.ElementType;
}

interface PhoneNumberInputConfig {
    type: 'phoneNumber-group';
    label: string;
    // validation: { required: string; minLength: { value: number; message: string } };
    component: React.ElementType;
}

// Union type for all possible field configurations
type FieldConfig = DateFieldConfig | TextFieldConfig | CheckboxGroupConfig | PhoneNumberInputConfig | SelectFieldConfig;

export interface PhoneNumber {
    type: 'Mobile' | 'Home' | 'Work';
    number: string;
    countryCode: string;
}

export interface FormValues {
    title: string;
    name: string;
    phoneNumber: PhoneNumber;
    dateOfBirth: Date;
    contactPreferences: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formFields: Record<keyof FormValues, FieldConfig> = {
    title: {
        type: 'select',
        label: 'Title',
        options: ['Mr', 'Mrs', 'Ms', 'Mx', 'Prefer not to say'],
        validation: {
            required: 'This field is required',
        },
    },
    name: {
        type: 'text',
        label: 'First Name',
        validation: {
            required: 'This field is required',
            minLength: { value: 2, message: 'Name needs a minimum of 2 characters' },
        },
        component: Input,
    },
    phoneNumber: {
        type: 'phoneNumber-group',
        label: 'Phone Number',
        component: PhoneNumberInput,
    },
    dateOfBirth: {
        type: 'date',
        label: 'Date of Birth',
        validation: {
            validate: value => {
                if (typeof value === 'undefined') return true;
                if (!(value instanceof Date)) {
                    return 'This birthday is invalid';
                }

                return h.isValidDate(value) || 'This birthday is invalid';
            },
        },
        component: DatePicker,
    },
    contactPreferences: {
        type: 'checkbox-group',
        label: 'Contact Preferences',
        options: [
            { value: 'mail', label: 'Contactable by mail' },
            { value: 'phone', label: 'Contactable by phone' },
            { value: 'text', label: 'Contactable by Text Message' },
        ],
        component: Checkbox,
    },
};

function PersonalInformation() {
    const { formState, handleSubmit, control, register, watch, setError, clearErrors } = useForm<FormValues>({
        defaultValues: {
            name: 'qwe',
            phoneNumber: { type: 'Work', countryCode: '+1' },
        },
    });
    const { errors } = formState;

    const renderedFormElements = Object.entries(formFields).map(([fieldName, fieldConfig]) => {
        const typedFieldName = fieldName as keyof FormValues;
        const isSelectInput = fieldConfig.type === 'select' && 'options' in fieldConfig;
        const isTextInput = fieldConfig.type === 'text';
        const isDateType = fieldConfig.type === 'date';

        if (isSelectInput) {
            return (
                <FormRow key={fieldName} label={fieldConfig.label} error={errors[typedFieldName]?.message}>
                    <Select {...register(typedFieldName, fieldConfig.validation)} fieldConfig={fieldConfig} />
                </FormRow>
            );
        }

        if (isTextInput) {
            return (
                <FormRow key={fieldName} label={fieldConfig.label} error={errors[typedFieldName]?.message}>
                    <Input type={fieldConfig.type} {...register(typedFieldName, fieldConfig.validation)} />
                </FormRow>
            );
        }

        if (isDateType) {
            return (
                <FormRow key={fieldName} label={fieldConfig.label} error={errors[typedFieldName]?.message}>
                    <DatePicker
                        key={typedFieldName}
                        control={control}
                        name='dateOfBirth'
                        rules={{
                            validate: value => {
                                // if field not used return since not required
                                if (typeof value === 'undefined') return;

                                if (!(value instanceof Date)) {
                                    return 'This birthday is invalid';
                                }

                                return h.isValidDate(value) || 'This birthday is invalid';
                            },
                        }}
                    />
                </FormRow>
            );
        }

        if (fieldConfig.type === 'checkbox-group') {
            return (
                <FormRow key={fieldName} label={fieldConfig.label} error={errors[typedFieldName]?.message}>
                    {fieldConfig.options.map(option => (
                        <Checkbox
                            key={option.value}
                            name='contactPreferences'
                            value={option.value}
                            label={option.label}
                            register={register}
                        />
                    ))}
                </FormRow>
            );
        }

        if (fieldConfig.type === 'phoneNumber-group') {
            return (
                <FormRow key={fieldName} label={fieldConfig.label} error={errors.phoneNumber?.message}>
                    <PhoneNumberInput
                        register={register}
                        baseName='phoneNumber'
                        watch={watch}
                        setError={setError}
                        clearErrors={clearErrors}
                    />
                </FormRow>
            );
        }

        // Fallback for unhandled field types
        const _exhaustiveCheck: never = fieldConfig;
        throw new Error(`Unhandled field type: ${_exhaustiveCheck}`);
    });

    const onSubmit = (data: FormValues) => {
        console.log('sent');
        console.log(data);
    };

    return (
        <div>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                {renderedFormElements}

                <Button fill={true} type='submit'>
                    Save your information
                </Button>
            </StyledForm>
        </div>
    );
}

export default PersonalInformation;
