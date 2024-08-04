import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { StyledForm, FormRow, Input, PasswordIndicator } from '../../components/Form';
import SpinnerMini from '../../components/SpinnerMini';
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

    function onSubmit(data: FormData) {
        setLoginError(null);
        if (!data.email || !data.password) return;

        login(
            { email: data.email, password: data.password },
            {
                onSuccess: () => {
                    toggleModal();
                    reset();
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
                <StyledForgotPassButton onClick={toggleRecoverPassView} type='button'>
                    Forgot your password?
                </StyledForgotPassButton>

                <Button type='submit' fill={true} isDisabled={isPending}>
                    {isPending && <SpinnerMini />}
                    {isPending ? 'Signing in...' : 'Sign in'}
                </Button>
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            </StyledForm>
        </div>
    );
}

export default LoginFrom;
