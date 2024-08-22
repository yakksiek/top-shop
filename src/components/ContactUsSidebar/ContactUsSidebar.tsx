import { useModalSidebarContext } from '../../contexts/ModalSidebarContext';
import { ModalHeader, StyledModalWrapper } from '../Modal';
import { callUs, needHelp } from '../../db/contactPageSidebarData';
import styled from 'styled-components';
import ContactUsListItem from './ContactUsListItem';

const StyledModalBody = styled.p`
    margin-bottom: 2rem;
`;

const StyledSection = styled.section`
    margin-bottom: 2rem;

    h4 {
        margin-bottom: 2rem;
    }
`;

function ContactUsSidebar() {
    const { closeSidebarModal } = useModalSidebarContext();
    return (
        <StyledModalWrapper>
            <ModalHeader toggleModal={closeSidebarModal} headerText='Contact Us' />
            <StyledSection>
                <StyledModalBody>
                    Wherever you are, T.Shop Client Advisors will be delighted to assist you.
                </StyledModalBody>
                <ul>
                    {callUs.map(contactItem => (
                        <ContactUsListItem serviceItem={contactItem} />
                    ))}
                </ul>
            </StyledSection>
            <StyledSection>
                <h4>Need help ?</h4>
                <ul>
                    {needHelp.map(serviceItem => (
                        <ContactUsListItem serviceItem={serviceItem} />
                    ))}
                </ul>
            </StyledSection>
        </StyledModalWrapper>
    );
}

export default ContactUsSidebar;
