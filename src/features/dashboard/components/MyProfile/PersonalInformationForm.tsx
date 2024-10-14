import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../../../components/Button';
import { StyledForm } from '../../../../components/Form';
import FieldRenderer from '../../../../components/Form/FieldRenderer';
import formFields, { FormValues } from '../../../../db/PersonalInformationFormData';

function PersonalInformation() {
    const methods = useForm<FormValues>({
        defaultValues: {
            title: 'Mr',
            name: 'qwe',
            surname: 'asdf',
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
