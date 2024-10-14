import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../../../components/Button';
import DatePicker from '../../../../components/DatePicker';
import { StyledForm } from '../../../../components/Form';
import FieldRenderer from '../../../../components/Form/FieldRenderer';
import PhoneNumberInput from '../../../../components/PhoneNumberInput';
import Select from '../../../../components/Select';
import ContactPreferencesFromCheckboxGroup from './ContactPreferencesFromCheckboxGroup';
import MyProfileFormInput from './MyProfileFormInput';

export interface SelectFieldConfig {
    type: 'select';
    label: string;
    options: string[];
    validation: {
        required: string;
    };
    component: React.ElementType;
}

export interface InputFieldConfig {
    type: 'text' | 'number';
    label: string;
    validation: {
        required: string;
        minLength?: { value: number; message: string };
    };
    component: React.ElementType;
}

export interface DateFieldConfig {
    type: 'date';
    label: string;
    component: React.ElementType;
}

export interface CheckboxGroupConfig {
    type: 'checkbox-group';
    label: string;
    options: { value: string; label: string }[];
    component: React.ElementType;
}

interface PhoneNumberInputConfig {
    type: 'phoneNumber-group';
    label: string;
    // Validation handled within the PhoneNumberInput component
    component: React.ElementType;
}

// Union type for all possible field configurations
export type FieldConfig =
    | DateFieldConfig
    | InputFieldConfig
    | CheckboxGroupConfig
    | PhoneNumberInputConfig
    | SelectFieldConfig;

export interface PhoneNumber {
    type: 'Mobile' | 'Home' | 'Work';
    number: string;
    countryCode: string;
}

export interface FormValues {
    title: string;
    name: string;
    surname: string;
    phoneNumber: PhoneNumber;
    dateOfBirth: Date;
    contactPreferences: string[];
}

const formFields: Array<{ name: keyof FormValues; config: FieldConfig }> = [
    {
        name: 'title',
        config: {
            type: 'select',
            label: 'Title',
            options: ['Mr', 'Mrs', 'Ms', 'Mx', 'Prefer not to say'],
            validation: {
                required: 'This field is required',
            },
            component: Select,
        },
    },
    {
        name: 'name',
        config: {
            type: 'text',
            label: 'First Name',
            validation: {
                required: 'This field is required',
                minLength: { value: 2, message: 'Name needs a minimum of 2 characters' },
            },
            component: MyProfileFormInput,
        },
    },
    {
        name: 'surname',
        config: {
            type: 'text',
            label: 'Last Name',
            validation: {
                required: 'This field is required',
                minLength: { value: 2, message: 'Name needs a minimum of 2 characters' },
            },
            component: MyProfileFormInput,
        },
    },
    {
        name: 'phoneNumber',
        config: {
            type: 'phoneNumber-group',
            label: 'Phone Number',
            component: PhoneNumberInput,
        },
    },
    {
        name: 'dateOfBirth',
        config: {
            type: 'date',
            label: 'Date of Birth',
            component: DatePicker,
        },
    },
    {
        name: 'contactPreferences',
        config: {
            type: 'checkbox-group',
            label: '',
            options: [
                { value: 'mail', label: 'Contactable by mail' },
                { value: 'phone', label: 'Contactable by phone' },
                { value: 'text', label: 'Contactable by Text Message' },
            ],
            component: ContactPreferencesFromCheckboxGroup,
        },
    },
];

function PersonalInformation() {
    const methods = useForm<FormValues>({
        defaultValues: {
            title: 'Mr',
            name: 'qwe',
            phoneNumber: { type: 'Work', countryCode: '+1', number: '1234567' },
            dateOfBirth: undefined,
            contactPreferences: [],
        },
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: FormValues) => {
        console.log('sent');
        console.log(data);
    };

    const renderedFormElements = formFields.map(({ name, config }) => (
        <FieldRenderer key={name as string} fieldName={name as string} fieldConfig={config} />
    ));

    return (
        <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <p style={{ textAlign: 'right' }}>Mandatory fields*</p>
                {renderedFormElements}

                <Button fill={true} type='submit'>
                    Save your information
                </Button>
            </StyledForm>
        </FormProvider>
    );
}

export default PersonalInformation;
