import styled from 'styled-components';
import { CENTERED_MODAL_Z_INDEX, CENTERED_MODAL_CONTAINER_Z_INDEX } from '../../constants/z-indexes';
import useNoScroll from '../../hooks/useNoScroll';
import { CrossIcon } from '../../shared/icons';
import { ModalHeader } from '../Modal';

const StyledOverlay = styled.div`
    background-color: var(--color-overlay-background);
    width: 100vw;
    height: 100vh;
    z-index: ${CENTERED_MODAL_Z_INDEX};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
`;

const StyledCentered = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${CENTERED_MODAL_CONTAINER_Z_INDEX};
`;

const StyledModal = styled.div`
    background-color: white;
    position: relative;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    min-height: 150px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const StyledCloseIcon = styled(CrossIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
`;

const StyledBody = styled.div`
    text-align: left;
`;

interface CenteredModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    headerText?: string;
}

function CenteredModal({ isOpen, onClose, children, headerText }: CenteredModalProps) {
    useNoScroll(isOpen);

    if (!isOpen) return null;

    const renderedHeader = headerText && <ModalHeader toggleModal={onClose} headerText={headerText} />;

    return (
        <>
            <StyledOverlay onClick={onClose} />
            <StyledCentered>
                <StyledModal>
                    {renderedHeader}
                    {!headerText && <StyledCloseIcon className='icon-close' onClick={onClose} />}
                    <StyledBody>{children}</StyledBody>
                </StyledModal>
            </StyledCentered>
        </>
    );
}

export default CenteredModal;
