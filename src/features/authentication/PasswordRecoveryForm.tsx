import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../components/Button';
import { FormRow, Input, StyledForm } from '../../components/Form';
import { useEffect } from 'react';
import usePasswordRecovery from './usePasswordRecovery';
import SpinnerMini from '../../components/SpinnerMini';
import SubmitMessage from '../../components/Form/SubmitMessage';

const StyledActionButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

interface PasswordRecoveryFormProps {
    toggleRecoverPassView: () => void;
}

interface FormData {
    email: string;
}

function PasswordRecoveryForm({ toggleRecoverPassView }: PasswordRecoveryFormProps) {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const { isPending, recoverPassword, recoveryPassError, recoveryPassSuccessMsg } = usePasswordRecovery();

    useEffect(() => {
        toggleRecoverPassView();
    }, [toggleRecoverPassView]);

    function onSubmit(data: FormData) {
        if (!data.email) return;

        recoverPassword(data.email, {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <div>
            <h4>Forgot Your Password</h4>
            <p>Please enter your email address to reset your password. You will receive an email shortly.</p>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow label='Email' error={''}>
                    <Input
                        id='email'
                        type='email'
                        {...register('email', {
                            required: 'This field is required',
                            pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email' },
                        })}
                    />
                    <StyledActionButtonsContainer>
                        <Button type='button' fill={false} onClick={toggleRecoverPassView} isDisabled={isPending}>
                            Cancel
                        </Button>
                        <Button type='submit' fill={true} isDisabled={isPending}>
                            {isPending && <SpinnerMini />}
                            {isPending ? 'Sending...' : 'Send'}
                        </Button>
                    </StyledActionButtonsContainer>
                    {recoveryPassError && <SubmitMessage message={recoveryPassError} type='error' />}
                    {recoveryPassSuccessMsg && <SubmitMessage message={recoveryPassSuccessMsg} type='success' />}
                </FormRow>
            </StyledForm>
        </div>
    );
}

export default PasswordRecoveryForm;
