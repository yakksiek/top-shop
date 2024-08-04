import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../components/Button';
import { FormRow, Input } from '../../components/Form';
import { useEffect } from 'react';

const StyledActionButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

interface PasswordRecoveryFormProps {
    toggleRecoverPassView: () => void;
}

interface FormData {
    email: string;
}

function PasswordRecoveryForm({ toggleRecoverPassView }: PasswordRecoveryFormProps) {
    const { register, formState, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            email: 'test@test.com',
        },
    });

    useEffect(() => {
        toggleRecoverPassView();
    }, [toggleRecoverPassView]);

    return (
        <div>
            <h4>Forgot Your Password</h4>
            <p>Please enter your email address to reset your password. You will receive an email shortly.</p>
            <FormRow label='Email' error={''}>
                <Input
                    id='email'
                    type='email'
                    {...register('email', {
                        required: 'This field is required',
                        pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email' },
                    })}
                />
                <StyledActionButtonsContainer>
                    <Button type='button' fill={false} onClick={toggleRecoverPassView}>
                        {/* {isPending && <SpinnerMini />} */}
                        {/* {isPending ? 'Signing in...' : 'Sign in'} */}
                        Cancel
                    </Button>
                    <Button type='submit' fill={true}>
                        {/* {isPending && <SpinnerMini />} */}
                        {/* {isPending ? 'Signing in...' : 'Sign in'} */}
                        Send
                    </Button>
                </StyledActionButtonsContainer>
            </FormRow>
        </div>
    );
}

export default PasswordRecoveryForm;
