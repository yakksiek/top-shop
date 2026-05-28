import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import { FormRow, Input, PasswordIndicator, StyledForm } from '../../components/Form';
import SubmitMessage from '../../components/Form/SubmitMessage';
import SpinnerMini from '../../components/SpinnerMini';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { StyledForgotPassButton } from './LoginForm.styled';
import { useLogin } from './useLogin';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import * as t from '../../types';

interface LoginFormProps {
    toggleModal: () => void;
    toggleRecoverPassView?: () => void;
}

interface LoginFormValues {
    email: string;
    password: string;
}

function LoginForm({ toggleModal, toggleRecoverPassView }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { register, formState, handleSubmit, reset } = useForm<LoginFormValues>({
        defaultValues: {
            email: 'test@test.com',
            password: '45GD1n/Ff8iR',
        },
    });
    const { errors } = formState;
    const { isPending, login, loginError, setLoginError } = useLogin();
    const { handleSetFavorites } = useFavoritesContext();
    const navigate = useNavigate();
    const clerk = useClerk();

    function onSubmit(data: LoginFormValues) {
        if (!data.email || !data.password) return;

        setLoginError(null);

        login(
            { email: data.email, password: data.password },
            {
                onSuccess: () => {
                    toggleModal();
                    reset();
                    const userDataFavorites =
                        (clerk.user?.unsafeMetadata?.favourites as t.FavoritesList[]) ?? [];
                    handleSetFavorites(userDataFavorites);
                    navigate('/dashboard', { replace: true });
                },
            },
        );
    }

    return (
        <>
            <h4>I already have an account</h4>
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

                <FormRow label='Password (min 6 characters)' error={errors.password && errors.password.message}>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'This field is required',
                            minLength: { value: 8, message: 'Password needs a minimum of 6 characters' },
                        })}
                    />
                    <PasswordIndicator showPassword={showPassword} revealHandler={setShowPassword} />
                </FormRow>

                <StyledForgotPassButton onClick={toggleRecoverPassView} type='button'>
                    Forgot your password?
                </StyledForgotPassButton>

                <Button type='submit' fill={true} isDisabled={isPending}>
                    {isPending && <SpinnerMini />}
                    {isPending ? 'Signing in...' : 'Sign in'}
                </Button>
                <p>Test data:</p>
                <p>email: test@test.com</p>
                <p>password: 45GD1n/Ff8iR</p>
                {loginError && <SubmitMessage message={loginError} type='error' />}
            </StyledForm>
        </>
    );
}

export default LoginForm;
