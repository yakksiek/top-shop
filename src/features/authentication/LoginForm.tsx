import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { FormRow, Input, StyledForm, StyledSeparator } from '../../components/Form';
import { ModalHeader, StyledModalWrapper } from '../../components/Modal';
import { StyledForgotPassButton } from './LoginForm.styled';

interface LoginFormProps {
    toggleModal: () => void;
    toggleCreateAccountView: () => void;
}

interface FormData {
    email: string;
    password: string;
}

function LoginForm({ toggleModal, toggleCreateAccountView }: LoginFormProps) {
    const { register, formState, handleSubmit } = useForm<FormData>();
    const { errors } = formState;

    function onSubmit(data: FormData) {
        console.log(data);
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

                        <FormRow label='Password (min 5 characters)' error={errors.password && errors.password.message}>
                            <Input
                                id='password'
                                type='password'
                                {...register('password', {
                                    required: 'This field is required',
                                    minLength: { value: 5, message: 'Password needs a minimum of 5 characters' },
                                })}
                            />
                        </FormRow>
                        <StyledForgotPassButton type='button'>Forgot your password?</StyledForgotPassButton>

                        <Button type='submit' fill={true}>
                            Sign in
                        </Button>
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
