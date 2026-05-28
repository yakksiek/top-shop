import Button from '../../components/Button';
import { StyledSeparator } from '../../components/Form';
import { ModalHeader, StyledModalWrapper } from '../../components/Modal';
import { useLoginModalContext } from '../../contexts/LoginModalContext';
import LoginForm from './LoginForm';
import PasswordRecoveryFlow from './PasswordRecoveryFlow';

function LoginModal() {
    const { toggleCreateAccountView, toggleLoginModal, recoverPassView, toggleRecoverPassView } =
        useLoginModalContext();

    return (
        <>
            <StyledModalWrapper>
                <ModalHeader toggleModal={toggleLoginModal} headerText='Identification' />
                {recoverPassView ? (
                    <PasswordRecoveryFlow onCancel={toggleRecoverPassView} onComplete={toggleLoginModal} />
                ) : (
                    <LoginForm toggleModal={toggleLoginModal} toggleRecoverPassView={toggleRecoverPassView} />
                )}
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

export default LoginModal;
