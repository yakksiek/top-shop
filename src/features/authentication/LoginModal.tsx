import { useState } from 'react';
import Button from '../../components/Button';
import { StyledSeparator } from '../../components/Form';
import { ModalHeader, StyledModalWrapper } from '../../components/Modal';
import LoginFrom from './LoginFrom';
import PasswordRecoveryForm from './PasswordRecoveryForm';

interface LoginModalProps {
    toggleModal: () => void;
    toggleCreateAccountView: () => void;
}

function LoginModal({ toggleModal, toggleCreateAccountView }: LoginModalProps) {
    const [recoverPassView, setRecoverPassView] = useState(false);

    const changeRecoverPassViewHandler = () => {
        setRecoverPassView(prevState => !prevState);
    };

    return (
        <>
            <StyledModalWrapper>
                <ModalHeader toggleModal={toggleModal} headerText='Identification' />
                {recoverPassView ? (
                    <PasswordRecoveryForm toggleRecoverPassView={changeRecoverPassViewHandler} />
                ) : (
                    <LoginFrom toggleModal={toggleModal} toggleRecoverPassView={changeRecoverPassViewHandler} />
                )}
            </StyledModalWrapper>
            <StyledSeparator />
            <StyledModalWrapper>
                <h4>I don't have an account yet</h4>
                <p>Enjoy add benefits and a reacher experience by creating a personal account</p>
                <button
                    type='button'
                    // fill={false}
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault();
                        toggleCreateAccountView();
                    }}
                >
                    Create My TS account
                </button>
            </StyledModalWrapper>
        </>
    );
}

export default LoginModal;
