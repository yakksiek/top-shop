import { Sidebar } from '../../components/Sidebar';
import { useLoginModalContext } from '../../contexts/LoginModalContext';

import CreateAccountForm from './CreateAccountForm';
import LoginForm from './LoginModal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    /* z-index: 20; */
`;

function LoginModal() {
    const { toggleLoginModal, toggleCreateAccountView, isCreateAccountView } = useLoginModalContext();

    return (
        <Sidebar toggleSidebarNavigation={toggleLoginModal} isOpen={true} slideFrom='right'>
            <StyledWrapper>
                {!isCreateAccountView ? (
                    <LoginForm toggleModal={toggleLoginModal} toggleCreateAccountView={toggleCreateAccountView} />
                ) : (
                    <CreateAccountForm
                        toggleCreateAccountView={toggleCreateAccountView}
                        toggleModal={toggleLoginModal}
                    />
                )}
            </StyledWrapper>
        </Sidebar>
    );
}

export default LoginModal;
