import { FormProvider, useForm } from 'react-hook-form';

import { useState } from 'react';
import Button from '../../../../components/Button';
import { StyledForm } from '../../../../components/Form';
import FieldRenderer from '../../../../components/Form/FieldRenderer';
import formFields, { FormValues } from '../../../../db/PersonalInformationFormData';
import * as h from '../../../../utils/helpers';
import { useUser } from '../../../authentication/useUser';
import useUpdateUserData from '../useUpdateUserData';
import SuccessModal from './SuccessModal';

function PersonalInformation() {
    const [isModalOpen, setModalOpen] = useState(false);
    const { updateUser, isPending } = useUpdateUserData();
    const { user } = useUser();

    // user is logged in to render PersonalInformation
    const { user_metadata } = user!;
    const {
        userName,
        userSurname,
        userPhoneNumber,
        userAddress,
        userPostCode,
        userDateOfBirth,
        userContactPreferences,
    } = h.getUserMetadata(user_metadata);

    const methods = useForm<FormValues>({
        defaultValues: {
            title: 'Mr',
            name: userName,
            surname: userSurname,
            phoneNumber: userPhoneNumber || { type: 'Mobile', countryCode: '+1', number: '' },
            address: userAddress || '',
            postCode: userPostCode || '',
            dateOfBirth: userDateOfBirth || '',
            contactPreferences: userContactPreferences || [],
        },
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: FormValues) => {
        updateUser(data, {
            onSuccess: () => {
                setModalOpen(true);
            },
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
