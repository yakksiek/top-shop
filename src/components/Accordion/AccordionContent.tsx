import { Content } from './Accordion.styled';

interface AccordionContentProps {
    children: React.ReactNode;
    isActive: boolean;
}

function AccordionContent({ children, isActive }: AccordionContentProps) {
    return <Content className={isActive ? 'open' : ''}>{children}</Content>;
}

export default AccordionContent;
