import { Sidebar } from '../../components/Sidebar';
import { useLoginModalContext } from '../../contexts/LoginModalContext';

import CreateAccountForm from './CreateAccountForm';
import LoginModal from './LoginModal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    /* z-index: 20; */
`;

function IdentificationModal() {
    const { toggleLoginModal, isCreateAccountView, isOpen } = useLoginModalContext();

    return (
        <Sidebar toggleSidebarNavigation={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
            <StyledWrapper>{!isCreateAccountView ? <LoginModal /> : <CreateAccountForm />}</StyledWrapper>
        </Sidebar>
    );
}

export default IdentificationModal;
