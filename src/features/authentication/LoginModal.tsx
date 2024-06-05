import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../../components/Button';
import { Sidebar } from '../../components/Sidebar';
import { useAuthenticationContext } from '../../contexts/AuthenticationContext';

import {
    StyledForgotPassButton,
    StyledForm,
    StyledFormRow,
    StyledHeader,
    StyledInput,
    StyledLabel,
    StyledSeparator,
    StyledWrapper,
} from './LoginModal.styled';

function LoginModal() {
    const { toggleLoginModal, isOpen } = useAuthenticationContext();

    return (
        <Sidebar toggleSidebar={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
            <StyledWrapper>
                <StyledHeader>
                    <h4>Identification</h4>

                    <LiaTimesSolid onClick={toggleLoginModal} />
                </StyledHeader>
                <div>
                    <h4>I already have an account</h4>
                    <StyledForm>
                        <StyledFormRow>
                            <StyledLabel htmlFor='name'>Name*</StyledLabel>
                            <StyledInput id='name' name='name' type='text' />
                        </StyledFormRow>

                        <StyledFormRow>
                            <StyledLabel htmlFor='password'>Password*</StyledLabel>
                            <StyledInput id='password' name='password' type='password' />
                            <StyledForgotPassButton type='button'>Forgot your password?</StyledForgotPassButton>
                        </StyledFormRow>

                        <Button type='submit' fill={true}>
                            Sign in
                        </Button>
                    </StyledForm>
                </div>
            </StyledWrapper>
            <StyledSeparator />
            <StyledWrapper>
                <h4>I don't have an account yet</h4>
                <p>Enjoy add benefits and a reacher experience by creating a personal account</p>
                <Button fill={false}>Create My TS account</Button>
            </StyledWrapper>
        </Sidebar>
    );
}

export default LoginModal;
