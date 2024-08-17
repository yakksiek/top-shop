import { Sidebar } from '../../components/Sidebar';
import { useLoginModalContext } from '../../contexts/LoginModalContext';

import CreateAccountForm from './CreateAccountForm';
import LoginModal from './LoginModal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    /* z-index: 20; */
`;

function IdentificationModal() {
    const { toggleLoginModal, toggleCreateAccountView, isCreateAccountView, isOpen } = useLoginModalContext();

    return (
        <Sidebar toggleSidebarNavigation={toggleLoginModal} isOpen={isOpen} slideFrom='right'>
            <StyledWrapper>
                {!isCreateAccountView ? (
                    <LoginModal toggleModal={toggleLoginModal} toggleCreateAccountView={toggleCreateAccountView} />
                ) : (
                    <CreateAccountForm
                        toggleCreateAccountView={toggleCreateAccountView}
                        toggleModal={toggleLoginModal}
                    />
                    // <div>
                    //     <h4>Create account view</h4>
                    //     <button onClick={toggleCreateAccountView}>go back to login</button>
                    // </div>
                )}
            </StyledWrapper>

            {/* <StyledWrapper>
                {!isCreateAccountView ? (
                    <div>
                        <h4>LoginView</h4>
                        <hr />
                        <p>No account?</p>
                        <button onClick={toggleCreateAccountView}>Create an acccount</button>
                    </div>
                ) : (
                    <div>
                        <h4>Create account view</h4>
                        <button onClick={toggleCreateAccountView}>go back to login</button>
                    </div>
                )}
            </StyledWrapper> */}
        </Sidebar>
    );
}

export default IdentificationModal;
