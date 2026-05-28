import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { FormRow, Input, PasswordIndicator, StyledForm } from '../../components/Form';
import SubmitMessage from '../../components/Form/SubmitMessage';
import SpinnerMini from '../../components/SpinnerMini';
import useResetPassword from './useResetPassword';

const StyledHeader = styled.header`
    margin-bottom: 1rem;
`;

const StyledReadOnlyInput = styled(Input)`
    background: var(--color-grey-100);
    color: var(--color-grey-500);
    cursor: default;

    &:hover,
    &:focus {
        border: var(--border-standard);
    }
`;

interface PasswordResetCodeFormProps {
    email: string;
    onComplete: () => void;
}

interface PasswordResetCodeFormValues {
    code: string;
    password: string;
    passwordConfirm: string;
}

function PasswordResetCodeForm({ email, onComplete }: PasswordResetCodeFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, getValues, formState, setFocus } = useForm<PasswordResetCodeFormValues>();
    const { errors } = formState;
    const resetPassword = useResetPassword();
    const navigate = useNavigate();

    useEffect(() => {
        setFocus('code');
    }, [setFocus]);

    function onSubmit(data: PasswordResetCodeFormValues) {
        resetPassword.mutate(
            { code: data.code, password: data.password },
            {
                onSuccess: () => {
                    onComplete();
                    navigate('/dashboard', { replace: true });
                },
            },
        );
    }

    return (
        <div>
            <StyledHeader>
                <h4>Enter the code we sent</h4>
                <p>Enter the 6-digit code we emailed you, along with a new password.</p>
            </StyledHeader>
            <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow label='Account'>
                    <StyledReadOnlyInput
                        id='username'
                        type='email'
                        defaultValue={email}
                        autoComplete='username'
                        readOnly
                        tabIndex={-1}
                    />
                </FormRow>

                <FormRow label='6-digit code' error={errors.code && errors.code.message}>
                    <Input
                        id='code'
                        type='text'
                        inputMode='numeric'
                        autoComplete='one-time-code'
                        maxLength={6}
                        {...register('code', {
                            required: 'This field is required',
                            pattern: { value: /^\d{6}$/, message: 'Please enter the 6-digit code' },
                        })}
                    />
                </FormRow>

                <FormRow label='New password (min 6 characters)' error={errors.password && errors.password.message}>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        autoComplete='new-password'
                        {...register('password', {
                            required: 'This field is required',
                            minLength: { value: 6, message: 'Password needs a minimum of 6 characters' },
                        })}
                    />
                    <PasswordIndicator showPassword={showPassword} revealHandler={setShowPassword} />
                </FormRow>

                <FormRow label='Confirm new password' error={errors.passwordConfirm && errors.passwordConfirm.message}>
                    <Input
                        id='passwordConfirm'
                        type={showConfirmPassword ? 'text' : 'password'}
                        autoComplete='new-password'
                        {...register('passwordConfirm', {
                            required: 'This field is required',
                            validate: (value) => value === getValues().password || 'Passwords need to match',
                        })}
                    />
                    <PasswordIndicator showPassword={showConfirmPassword} revealHandler={setShowConfirmPassword} />
                </FormRow>

                <Button type='submit' fill={true} isDisabled={resetPassword.isPending}>
                    {resetPassword.isPending && <SpinnerMini />}
                    {resetPassword.isPending ? 'Resetting...' : 'Reset password'}
                </Button>
                {resetPassword.error && <SubmitMessage message={(resetPassword.error as Error).message} type='error' />}
            </StyledForm>
        </div>
    );
}

export default PasswordResetCodeForm;
