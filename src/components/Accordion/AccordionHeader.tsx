import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { Header, Title } from './Accordion.styled';

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
