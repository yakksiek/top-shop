import DatePicker from '../components/DatePicker';
import PhoneNumberInput from '../components/PhoneNumberInput';
import Select from '../components/Select';
import ContactPreferencesFromCheckboxGroup from '../features/dashboard/components/MyProfile/ContactPreferencesFromCheckboxGroup';
import MyProfileFormInput from '../features/dashboard/components/MyProfile/MyProfileFormInput';

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
        required?: string;
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
    company: string;
    address: string;
    postCode: string;
    phoneNumber: PhoneNumber;
    dateOfBirth: string;
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
                minLength: { value: 2, message: 'Surname needs a minimum of 2 characters' },
            },
            component: MyProfileFormInput,
        },
    },
    {
        name: 'company',
        config: {
            type: 'text',
            label: 'Company',
            validation: {
                minLength: { value: 2, message: 'Company name needs a minimum of 2 characters' },
            },
            component: MyProfileFormInput,
        },
    },
    {
        name: 'address',
        config: {
            type: 'text',
            label: 'Address',
            validation: {
                required: 'This field is required',
                minLength: { value: 2, message: 'Address needs a minimum of 2 characters' },
            },
            component: MyProfileFormInput,
        },
    },
    {
        name: 'postCode',
        config: {
            type: 'text',
            label: 'Postal Code',
            validation: {
                required: 'This field is required',
                minLength: { value: 2, message: 'Company name needs a minimum of 2 characters' },
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
    {
        name: 'dateOfBirth',
        config: {
            type: 'date',
            label: 'Date of Birth',
            component: DatePicker,
        },
    },
];

export default formFields;
