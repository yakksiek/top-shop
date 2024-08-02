import { Sidebar } from '../../components/Sidebar';
import { useLoginModalContext } from '../../contexts/LoginModalContext';

import { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';
import LoginForm from './LoginForm';

function LoginModal() {
    const { toggleLoginModal, isOpen } = useLoginModalContext();
    const [isCreateAccountView, setIsCreateAccountView] = useState(false);

    const toggleCreateAccountView = () => {
        setIsCreateAccountView(prevState => !prevState);
    };

    return (
        <Sidebar toggleSidebar={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
            {!isCreateAccountView ? (
                <LoginForm toggleModal={toggleLoginModal} toggleCreateAccountView={toggleCreateAccountView} />
            ) : (
                <CreateAccountForm toggleCreateAccountView={toggleCreateAccountView} toggleModal={toggleLoginModal} />
            )}
        </Sidebar>
    );
}

export default LoginModal;
