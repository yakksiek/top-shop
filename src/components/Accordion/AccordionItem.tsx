import { CategoryDetailsListItem, CategoryItem } from './Accordion.styled';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';

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
