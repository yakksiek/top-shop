import { FormProvider, useForm } from 'react-hook-form';

import Button from '../../../../components/Button';
import { StyledForm } from '../../../../components/Form';
import FieldRenderer from '../../../../components/Form/FieldRenderer';
import formFields, { FormValues } from '../../../../db/PersonalInformationFormData';
import { useUser } from '../../../authentication/useUser';
import useUpdateUserData from '../useUpdateUserData';
import SuccessModal from './SuccessModal';
import { useState } from 'react';

function PersonalInformation() {
    const [isModalOpen, setModalOpen] = useState(false);
    const { updateUser, isPending } = useUpdateUserData();
    const { user } = useUser();
    // user IS logged in to render PersonalInformation
    const { user_metadata } = user!;
    const { name: userName, surname: userSurname } = user_metadata;
    const userAddress = user_metadata.address || '';
    const userPhoneNumber = user_metadata.phoneNumber || { type: 'Mobile', countryCode: '+1', number: '' };
    const userPostCode = user_metadata.postCode || '';
    const userDateOfBirth = user_metadata.dateOfBirth || undefined;
    const userContactPreferences = user_metadata.contactPreferences || [];

    const methods = useForm<FormValues>({
        defaultValues: {
            title: 'Mr',
            name: userName,
            surname: userSurname,
            phoneNumber: userPhoneNumber,
            address: userAddress,
            postCode: userPostCode,
            dateOfBirth: userDateOfBirth,
            contactPreferences: userContactPreferences,
        },
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: FormValues) => {
        console.log('form filed correctly');
        updateUser(data, {
            onSuccess: () => setModalOpen(true),
        });
    };

    const renderedFormElements = formFields.map(({ name, config }) => (
        <FieldRenderer key={name as string} fieldName={name as string} fieldConfig={config} />
    ));

    return (
        <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <p style={{ textAlign: 'right' }}>Mandatory fields*</p>
                {renderedFormElements}

                <Button fill={true} type='submit' isDisabled={isPending}>
                    {isPending ? 'Saving...' : 'Save your information'}
                </Button>
            </StyledForm>

            <SuccessModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </FormProvider>
    );
}

export default PersonalInformation;
