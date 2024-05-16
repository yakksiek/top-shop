import styled from 'styled-components';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

const Title = styled.h5`
    font-weight: 400;
    display: flex;
    align-items: center;
`;

interface AccordionHeaderProps {
    headline: string;
    isActive: boolean;
    onClick: () => void;
}

function AccordionHeader({ headline, isActive, onClick }: AccordionHeaderProps) {
    return (
        <Header onClick={onClick}>
            <Title>{headline}</Title>
            {isActive ? <FiMinus /> : <GoPlus />}
        </Header>
    );
}

export default AccordionHeader;
