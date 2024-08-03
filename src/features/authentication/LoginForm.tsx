import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { FormRow, Input, StyledForm, StyledSeparator } from '../../components/Form';
import { ModalHeader, StyledModalWrapper } from '../../components/Modal';
import { StyledForgotPassButton } from './LoginForm.styled';
import { useLogin } from './useLogin';

interface LoginFormProps {
    toggleModal: () => void;
    toggleCreateAccountView: () => void;
}

interface FormData {
    email: string;
    password: string;
}

function LoginForm({ toggleModal, toggleCreateAccountView }: LoginFormProps) {
    const { register, formState, handleSubmit, reset } = useForm<FormData>();
    const { errors } = formState;
    const { isPending, login, loginError } = useLogin();

    function onSubmit(data: FormData) {
        console.log('logging in');
        if (!data.email || !data.password) return;

        login({ email: data.email, password: data.password });

        toggleModal();
        reset();
    }

    return (
        <>
            <StyledModalWrapper>
                <ModalHeader toggleModal={toggleModal} headerText='Identification' />
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
                                type='password'
                                {...register('password', {
                                    required: 'This field is required',
                                    minLength: { value: 6, message: 'Password needs a minimum of 6 characters' },
                                })}
                            />
                        </FormRow>
                        <StyledForgotPassButton type='button'>Forgot your password?</StyledForgotPassButton>

                        <Button type='submit' fill={true} isDisabled={isPending}>
                            {isPending ? 'Signing in...' : 'Sign in'}
                        </Button>
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                    </StyledForm>
                </div>
            </StyledModalWrapper>
            <StyledSeparator />
            <StyledModalWrapper>
                <h4>I don't have an account yet</h4>
                <p>Enjoy add benefits and a reacher experience by creating a personal account</p>
                <Button type='button' fill={false} onClick={toggleCreateAccountView}>
                    Create My TS account
                </Button>
            </StyledModalWrapper>
        </>
    );
}

export default LoginForm;
