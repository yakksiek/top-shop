import { useState } from 'react';
import styled from 'styled-components';

import AccordionItem from './AccordionItem';
import { device } from '../../styles/breakpoints';

export const AccordionContainer = styled.div`
    width: var(--screen-width-medium);
    margin: 0 auto;

    @media ${device.desktop} {
        display: none;
    }
`;

interface FooterCategory {
    headline: string;
    items: string[];
}

interface AccordionProps {
    data: FooterCategory[];
}

function Accordion({ data }: AccordionProps) {
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
            {data.map((section, index) => (
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
