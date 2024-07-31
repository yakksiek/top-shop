import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { FormRow, Input, StyledForm, StyledSeparator } from '../../components/Form';
import { StyledModalWrapper, ModalHeader } from '../../components/Modal';

interface CreateAccountFormProps {
    toggleCreateAccountView: () => void;
    toggleModal: () => void;
}

interface FormData {
    email: string;
    password: string;
    passwordConfirm: string;
}

function CreateAccountForm({ toggleCreateAccountView, toggleModal }: CreateAccountFormProps) {
    const { register, formState, getValues, handleSubmit } = useForm<FormData>();
    const { errors } = formState;

    function onSubmit(data: FormData) {
        console.log(data);
    }

    return (
        <>
            <StyledModalWrapper>
                <ModalHeader toggleModal={toggleModal} headerText='Create an account' />
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

                    <FormRow label='Confirm password' error={errors.passwordConfirm && errors.passwordConfirm.message}>
                        <Input
                            id='passwordConfirm'
                            type='password'
                            {...register('passwordConfirm', {
                                required: 'This field is required',
                                validate: value => value === getValues().password || 'Passwords needs to match',
                            })}
                        />
                    </FormRow>
                    <Button type='submit' fill={true}>
                        Create an account
                    </Button>
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
