import { useState } from 'react';

import footerData from '../../db/footer.json';
import { AccordionContainer } from './Accordion.styled';
import AccordionItem from './AccordionItem';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <AccordionContainer>
            {footerData.categories.map((section, index) => (
                <AccordionItem
                    key={index}
                    section={section}
                    isActive={activeIndex === index}
                    onToggle={handleToggle}
                    index={index}
                />
            ))}
        </AccordionContainer>
    );
}

export default Accordion;
