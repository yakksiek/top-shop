import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import * as h from '../../../../utils/helpers';
import Button from '../../../../components/Button';
import Checkbox from '../../../../components/Checkbox';
import { FormRow, StyledForm } from '../../../../components/Form';
import SpinnerMini from '../../../../components/SpinnerMini';
import { useUser } from '../../../authentication/useUser';
import useUpdateUserData from '../useUpdateUserData';

const checkboxValidation = {
    required: 'This field is required',
};

const StyledParagraph = styled.p`
    text-decoration: underline;
    cursor: pointer;
`;

export interface NewsletterFormValues {
    newsletter: boolean;
}

interface MyNewsletterFormProps {
    setModalOpen: (value: boolean) => void;
}

function MyNewsletterForm({ setModalOpen }: MyNewsletterFormProps) {
    const { user } = useUser();
    const { updateUser, isPending } = useUpdateUserData();
    // user must be logged in to render this component
    const { user_metadata } = user!;
    const { userNewsletter } = h.getUserMetadata(user_metadata);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            newsletter: userNewsletter || false,
        },
    });

    const isNewsletterChecked = watch('newsletter');

    const onSubmit = () => {
        if (userNewsletter) {
            updateUser(
                { newsletter: false },
                {
                    onSuccess: () => setValue('newsletter', false),
                },
            );
        } else {
            updateUser({ newsletter: true });
        }
    };

    const checkboxError: string | undefined =
        typeof errors.newsletter?.message === 'string' ? errors.newsletter?.message : undefined;

    const renderedButtonLabel = userNewsletter ? 'Unsubscribe' : 'Subscribe';

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {!userNewsletter && (
                <FormRow marginBottom={false} error={checkboxError}>
                    <Checkbox<NewsletterFormValues>
                        register={register}
                        name='newsletter'
                        label='Check the box if you would like to receive emails from us'
                        rules={checkboxValidation}
                    />
                </FormRow>
            )}
            {!userNewsletter && (
                <StyledParagraph onClick={() => setModalOpen(true)}>
                    By subscribing you agree to our Privacy Policy.
                </StyledParagraph>
            )}
            <Button fill={true} type='submit' width='medium' isDisabled={!isNewsletterChecked || isPending}>
                {isPending ? <SpinnerMini /> : `${renderedButtonLabel}`}
            </Button>
        </StyledForm>
    );
}

export default MyNewsletterForm;
