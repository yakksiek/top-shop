import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import { FormRow, Input, PasswordIndicator, StyledForm } from '../../components/Form';
import SubmitMessage from '../../components/Form/SubmitMessage';
import SpinnerMini from '../../components/SpinnerMini';
import { useFavouritesContext } from '../../contexts/FavouritesContext';
import { StyledForgotPassButton } from './LoginForm.styled';
import { useLogin } from './useLogin';

interface LoginFormProps {
    toggleModal: () => void;
    toggleRecoverPassView: () => void;
}

interface FormData {
    email: string;
    password: string;
}

function LoginFrom({ toggleModal, toggleRecoverPassView }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { register, formState, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            email: 'test@test.com',
            password: '123456',
        },
    });
    const { errors } = formState;
    const { isPending, login, loginError, setLoginError } = useLogin();
    const { handleSetFavourites } = useFavouritesContext();

    function onSubmit(data: FormData) {
        if (!data.email || !data.password) return;

        setLoginError(null);

        login(
            { email: data.email, password: data.password },
            {
                onSuccess: data => {
                    toggleModal();
                    reset();

                    const userDataFavourites = data.user.user_metadata.favourites;
                    handleSetFavourites(userDataFavourites);
                },
            },
        );
    }

    return (
        <div>
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
                            minLength: { value: 6, message: 'Password needs a minimum of 6 characters' },
                        })}
                    />
                    <PasswordIndicator showPassword={showPassword} revealHandler={setShowPassword} />
                </FormRow>
                <StyledForgotPassButton
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleRecoverPassView;
                    }}
                    type='button'
                >
                    Forgot your password?
                </StyledForgotPassButton>

                <Button type='submit' fill={true} isDisabled={isPending}>
                    {isPending && <SpinnerMini />}
                    {isPending ? 'Signing in...' : 'Sign in'}
                </Button>
                <p>Test data:</p>
                <p>email: test@test.com</p>
                <p>password: 123456</p>
                {loginError && <SubmitMessage message={loginError} type='error' />}
            </StyledForm>
        </div>
    );
}

export default LoginFrom;
