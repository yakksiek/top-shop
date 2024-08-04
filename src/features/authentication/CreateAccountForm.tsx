import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { FormRow, Input, PasswordIndicator, StyledForm, StyledSeparator } from '../../components/Form';
import { StyledModalWrapper, ModalHeader } from '../../components/Modal';
import { useSignup } from './useSignup';
import SpinnerMini from '../../components/SpinnerMini';
import { useState } from 'react';

interface CreateAccountFormProps {
    toggleCreateAccountView: () => void;
    toggleModal: () => void;
}

interface FormData {
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

function CreateAccountForm({ toggleCreateAccountView, toggleModal }: CreateAccountFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { isPending, signup, signupError } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            name: 'Zenon',
            surname: 'Zenonowicz',
            email: 'zenon@test.com',
            password: '654321',
            passwordConfirm: '654321',
        },
    });
    const { errors } = formState;

    function onSubmit({ name, surname, email, password }: FormData) {
        if (!name || !password || !surname || !email) return;

        signup(
            { name, surname, password, email },
            {
                onSuccess: () => {
                    toggleModal();
                    reset();
                },
            },
        );
    }

    return (
        <>
            <StyledModalWrapper>
                <ModalHeader toggleModal={toggleModal} headerText='Create an account' />
                <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormRow label='Name' error={errors.name && errors.name.message}>
                        <Input
                            id='name'
                            type='text'
                            {...register('name', {
                                required: 'This field is required',
                                minLength: { value: 2, message: 'Name needs a minimum of 2 characters' },
                            })}
                        />
                    </FormRow>

                    <FormRow label='Surname' error={errors.surname && errors.surname.message}>
                        <Input
                            id='surname'
                            type='text'
                            {...register('surname', {
                                required: 'This field is required',
                                minLength: { value: 2, message: 'Surname needs a minimum of 2 characters' },
                            })}
                        />
                    </FormRow>

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
                        {isPending ? 'Creating an account...' : 'Create an account'}
                    </Button>
                    {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
                </StyledForm>
            </StyledModalWrapper>
            <StyledSeparator />
            <StyledModalWrapper>
                <h4>Have you got an account?</h4>
                <Button type='button' fill={false} onClick={toggleCreateAccountView}>
                    Go back to login page
                </Button>
            </StyledModalWrapper>
        </>
    );
}

export default CreateAccountForm;
