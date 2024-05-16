import styled from 'styled-components';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';

const CategoryItem = styled.div`
    padding: 1rem 0;
    border-top: var(--border-standard);
    cursor: pointer;
`;

const CategoryDetailsListItem = styled.li`
    margin: 0.5rem 1rem 1.5rem;
`;

interface AccordionItemProps {
    index: number;
    section: {
        headline: string;
        items: string[];
    };
    isActive: boolean;
    onToggle: (index: number) => void;
}

function AccordionItem({ index, section, isActive, onToggle }: AccordionItemProps) {
    return (
        <CategoryItem>
            <AccordionHeader headline={section.headline} isActive={isActive} onClick={() => onToggle(index)} />
            <AccordionContent isActive={isActive}>
                <ul>
                    {section.items.map((item, index) => (
                        <CategoryDetailsListItem key={index}>{item}</CategoryDetailsListItem>
                    ))}
                </ul>
            </AccordionContent>
        </CategoryItem>
    );
}

export default AccordionItem;
