import { LiaTimesSolid } from 'react-icons/lia';
import styled from 'styled-components';

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h4 {
        margin-bottom: 0;
    }
`;

const StyledIconWrapper = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

interface ModalHeaderProps {
    toggleModal: () => void;
    headerText: string;
}

function ModalHeader({ toggleModal, headerText }: ModalHeaderProps) {
    return (
        <StyledModalHeader>
            <h4>{headerText}</h4>

            <StyledIconWrapper onClick={toggleModal}>
                <LiaTimesSolid />
            </StyledIconWrapper>
        </StyledModalHeader>
    );
}

export default ModalHeader;
