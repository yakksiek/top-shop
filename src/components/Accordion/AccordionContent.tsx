import styled from 'styled-components';

const Content = styled.div`
    display: grid;
    transition: 500ms grid-template-rows ease;
    grid-template-rows: 0fr;

    &.open {
        grid-template-rows: 1fr;
    }

    ul {
        overflow: hidden;
    }
`;

interface AccordionContentProps {
    children: React.ReactNode;
    isActive: boolean;
}

function AccordionContent({ children, isActive }: AccordionContentProps) {
    return <Content className={isActive ? 'open' : ''}>{children}</Content>;
}

export default AccordionContent;
