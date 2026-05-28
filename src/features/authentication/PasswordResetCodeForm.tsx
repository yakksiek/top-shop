import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { FormRow, Input, PasswordIndicator, StyledForm } from '../../components/Form';
import SubmitMessage from '../../components/Form/SubmitMessage';
import SpinnerMini from '../../components/SpinnerMini';
import useRequestPasswordReset from './useRequestPasswordReset';
import useResetPassword from './useResetPassword';

const RESEND_COOLDOWN_SECONDS = 30;

const StyledHeader = styled.header`
    margin-bottom: 1rem;
`;

const StyledStepIndicator = styled.p`
    font-size: 0.75rem;
    color: var(--color-grey-500);
    margin-bottom: 0.25rem;
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

const StyledResendCallout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
`;

const StyledResendPrompt = styled.p`
    font-size: 0.75rem;
    margin: 0 0 0.25rem 0;
`;

const StyledResendButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 0.75rem;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start;
    padding: 1px;

    &:focus {
        outline: 1px solid var(--color-black);
    }

    &:disabled {
        cursor: default;
        color: var(--color-grey-500);
        text-decoration: none;
    }
`;

interface PasswordResetCodeFormProps {
    email: string;
    onComplete: () => void;
    stepLabel?: string;
}

interface PasswordResetCodeFormValues {
    code: string;
    password: string;
    passwordConfirm: string;
}

function PasswordResetCodeForm({ email, onComplete, stepLabel }: PasswordResetCodeFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [cooldown, setCooldown] = useState(RESEND_COOLDOWN_SECONDS);
    const { register, handleSubmit, getValues, formState, setFocus } = useForm<PasswordResetCodeFormValues>();
    const { errors } = formState;
    const resetPassword = useResetPassword();
    const requestReset = useRequestPasswordReset();
    const navigate = useNavigate();

    useEffect(() => {
        setFocus('code');
    }, [setFocus]);

    useEffect(() => {
        if (cooldown <= 0) return;
        const id = setInterval(() => setCooldown((s) => s - 1), 1000);
        return () => clearInterval(id);
    }, [cooldown]);

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

    function onResend() {
        requestReset.mutate(email, {
            onSuccess: () => setCooldown(RESEND_COOLDOWN_SECONDS),
        });
    }

    const resendDisabled = cooldown > 0 || requestReset.isPending || resetPassword.isPending;
    const resendLabel = requestReset.isPending ? 'Sending...' : cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend code';

    const submitDisabled = resetPassword.isPending || requestReset.isPending;

    return (
        <div>
            <StyledHeader>
                {stepLabel && <StyledStepIndicator>{stepLabel}</StyledStepIndicator>}
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

                <FormRow label='6-digit code' error={errors.code && errors.code.message} marginBottom={false}>
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

                <StyledResendCallout>
                    <StyledResendPrompt>Didn't get a code?</StyledResendPrompt>
                    <StyledResendButton type='button' onClick={onResend} disabled={resendDisabled}>
                        {resendLabel}
                    </StyledResendButton>
                </StyledResendCallout>

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

                <Button type='submit' fill={true} isDisabled={submitDisabled}>
                    {resetPassword.isPending && <SpinnerMini />}
                    {resetPassword.isPending ? 'Resetting...' : 'Reset password'}
                </Button>

                {resetPassword.error && <SubmitMessage message={(resetPassword.error as Error).message} type='error' />}
                {requestReset.error && <SubmitMessage message={(requestReset.error as Error).message} type='error' />}
            </StyledForm>
        </div>
    );
}

export default PasswordResetCodeForm;
