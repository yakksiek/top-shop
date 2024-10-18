import styled from 'styled-components';
import CenteredModal from '../../../../components/CenteredModal';
import Heading from '../../../../components/Heading';
import privacyPolicy from '../../../../db/privacyPolicy';

const StyledModalContent = styled.div`
    padding: 20px;
    max-height: 80vh;
    overflow-y: auto;
`;

const StyledModalSection = styled.div`
    margin-bottom: 2rem;

    & > * {
        margin-bottom: 1rem;
    }

    ol > li {
        margin-bottom: 1rem;
    }
`;

const StyledOrderedList = styled.ol`
    list-style-type: lower-alpha;
    padding-left: 1.5em;
    margin: 0;
`;

interface PrivacyPolicyModalProps {
    isModalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

const privacyPolicyKeys: Array<keyof typeof privacyPolicy> = Object.keys(privacyPolicy) as Array<
    keyof typeof privacyPolicy
>;

function PrivacyPolicyModal({ isModalOpen, setModalOpen }: PrivacyPolicyModalProps) {
    return (
        <CenteredModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} headerText='Privacy Policy'>
            <StyledModalContent>
                {privacyPolicyKeys.map(sectionKey => {
                    const section = privacyPolicy[sectionKey];
                    return (
                        <StyledModalSection key={sectionKey}>
                            <Heading as='h5' $textAlign='left' $marginBottom={true}>
                                {section.title}
                            </Heading>
                            <p>{section.description}</p>
                            <StyledOrderedList type='a'>
                                {section.list.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </StyledOrderedList>
                            {section.footer && <p>{section.footer}</p>}
                        </StyledModalSection>
                    );
                })}
            </StyledModalContent>
        </CenteredModal>
    );
}

export default PrivacyPolicyModal;
