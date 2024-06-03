import styled from 'styled-components';
import { LiaTimesSolid } from 'react-icons/lia';
import { Sidebar } from '../../components/Sidebar';
import { useAuthenticationContext } from '../../contexts/AuthenticationContext';
import Button from '../../components/Button';
import { device } from '../../styles/breakpoints';

const StyledWrapper = styled.div`
    margin: 0 auto;
    padding: var(--padding-sidebar-mobile);

    h4 {
        font-weight: 400;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.75rem;
    }

    @media ${device.tablet} {
        padding: 0 4rem;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
    font-size: 0.75rem;
    font-weight: 300;
    margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
    border: var(--border-standard);
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;

    &:focus {
        border-color: var(--color-black);
    }
`;

const StyledForgotPassButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 0.75rem;
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start;
    padding: 1px;

    &:focus {
        outline: 1px solid var(--color-black);
    }
`;

const StyledSeparator = styled.div`
    padding: 0;
    border-top: var(--border-standard);
    height: 1rem;
`;

function LoginModal() {
    const { toggleLoginModal, isOpen } = useAuthenticationContext();

    return (
        <Sidebar toggleSidebar={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
            <StyledWrapper>
                <StyledHeader>
                    <h4>Identification</h4>
                    <LiaTimesSolid />
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
