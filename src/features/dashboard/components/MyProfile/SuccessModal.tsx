import styled from 'styled-components';
import { SUCCESS_MODAL_CONTAINER, SUCCESS_MODAL_Z_INDEX } from '../../../../constants/z-indexes';
import useNoScroll from '../../../../hooks/useNoScroll';
import { CrossIcon } from '../../../../shared/icons';

const StyledOverlay = styled.div`
    background-color: var(--color-overlay-background);
    width: 100vw;
    height: 100vh;
    z-index: ${SUCCESS_MODAL_Z_INDEX};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

const StyledCentered = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${SUCCESS_MODAL_CONTAINER};
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
`;

const StyledCloseIcon = styled(CrossIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
`;

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    useNoScroll(isOpen);
    if (!isOpen) return null;

    return (
        <>
            <StyledOverlay onClick={onClose} />
            <StyledCentered>
                <StyledModal>
                    <StyledCloseIcon className='icon-close' onClick={onClose} />
                    <p>Your personal information was updated successfully.</p>
                </StyledModal>
            </StyledCentered>
        </>
    );
}

export default SuccessModal;
