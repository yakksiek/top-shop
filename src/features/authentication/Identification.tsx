import { Sidebar } from '../../components/Sidebar';
import { useLoginModalContext } from '../../contexts/LoginModalContext';

import { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';
import LoginForm from './LoginModal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    /* z-index: 20; */
`;

function LoginModal() {
    const { toggleLoginModal, isOpen } = useLoginModalContext();
    const [isCreateAccountView, setIsCreateAccountView] = useState(false);

    const toggleCreateAccountView = () => {
        setIsCreateAccountView(prevState => !prevState);
    };

    return (
        <Sidebar toggleSidebarNavigation={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
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
