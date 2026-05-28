import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../components/Button';
import { FormRow, Input, StyledForm } from '../../components/Form';
import useRequestPasswordReset from './useRequestPasswordReset';
import SpinnerMini from '../../components/SpinnerMini';
import SubmitMessage from '../../components/Form/SubmitMessage';

const StyledActionButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const StyledHeader = styled.header`
    margin-bottom: 1rem;
`;

interface PasswordRecoveryFormProps {
    onCancel: () => void;
    onSuccess: (email: string) => void;
}

interface PasswordRecoveryFormValues {
    email: string;
}

function PasswordRecoveryForm({ onCancel, onSuccess }: PasswordRecoveryFormProps) {
    const { register, handleSubmit, formState } = useForm<PasswordRecoveryFormValues>();
    const requestReset = useRequestPasswordReset();
    const { errors } = formState;

    function onSubmit(data: PasswordRecoveryFormValues) {
        if (!data.email) return;

        requestReset.mutate(data.email, {
            onSuccess: () => onSuccess(data.email),
        });
    }

    return (
        <div>
            <StyledHeader>
                <h4>Forgot Your Password?</h4>
                <p>Please enter your email address to reset your password. You will receive an email shortly.</p>
            </StyledHeader>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow label='Email' error={errors.email && errors.email.message}>
                    <Input
                        id='email'
                        type='email'
                        {...register('email', {
                            required: 'This field is required',
                            pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email' },
                        })}
                    />
                </FormRow>
                <StyledActionButtonsContainer>
                    <Button type='button' fill={false} onClick={onCancel} isDisabled={requestReset.isPending}>
                        Cancel
                    </Button>
                    <Button type='submit' fill={true} isDisabled={requestReset.isPending}>
                        {requestReset.isPending && <SpinnerMini />}
                        {requestReset.isPending ? 'Sending...' : 'Send'}
                    </Button>
                </StyledActionButtonsContainer>
                {requestReset.error && (
                    <SubmitMessage message={(requestReset.error as Error).message} type='error' />
                )}
            </StyledForm>
        </div>
    );
}

export default PasswordRecoveryForm;
