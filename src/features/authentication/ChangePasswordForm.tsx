import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { FormRow, Input, PasswordIndicator, StyledForm } from '../../components/Form';
import { useUser } from './useUser';
import Button from '../../components/Button';
import SpinnerMini from '../../components/SpinnerMini';
import { device } from '../../styles/breakpoints';
import useUpdateUserPassword from './useUpadateUserPassword';
import SubmitMessage from '../../components/Form/SubmitMessage';

const StyledWrapper = styled.div`
    margin: 1rem auto;
    width: var(--screen-width-medium);

    @media ${device.tablet} {
        max-width: 35rem;
    }
`;

interface FormData {
    password: string;
    passwordConfirm: string;
}

function ChangePasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, formState, getValues, handleSubmit, reset } = useForm<FormData>();
    const { errors } = formState;
    const { user } = useUser();
    const userEmail = user?.email || '';
    const { changePassword, isPending, errorMessage, successMessage } = useUpdateUserPassword();

    function onSubmit(data: FormData) {
        if (!data.password) return;

        changePassword(data.password, {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <StyledWrapper>
            <StyledWrapper>
                <p>
                    Your email: <strong>{userEmail}</strong>
                </p>
                <p>Please enter a new password.</p>
            </StyledWrapper>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormRow label='Password (min 6 characters)' error={errors.password && errors.password.message}>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'This field is required',
                            minLength: { value: 6, message: 'Password needs a minimum of 6 characters' },
                        })}
                    />
                    <PasswordIndicator showPassword={showPassword} revealHandler={setShowPassword} />
                </FormRow>

                <FormRow label='Confirm password' error={errors.passwordConfirm && errors.passwordConfirm.message}>
                    <Input
                        id='passwordConfirm'
                        type={showConfirmPassword ? 'text' : 'password'}
                        {...register('passwordConfirm', {
                            required: 'This field is required',
                            validate: value => value === getValues().password || 'Passwords needs to match',
                        })}
                    />
                    <PasswordIndicator showPassword={showConfirmPassword} revealHandler={setShowConfirmPassword} />
                </FormRow>
                <Button type='submit' fill={true} isDisabled={isPending}>
                    {isPending && <SpinnerMini />}
                    {isPending ? 'Changing password...' : 'Change password'}
                </Button>
                {errorMessage && <SubmitMessage message={errorMessage} type='error' />}
                {successMessage && <SubmitMessage message={successMessage} type='success' />}
            </StyledForm>
        </StyledWrapper>
    );
}

export default ChangePasswordForm;
