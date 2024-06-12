import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    margin: 0 auto;
    margin-bottom: 6rem;
`;

interface SectionProps {
    children: React.ReactNode;
}

function Section({ children }: SectionProps) {
    return <StyledSection>{children}</StyledSection>;
}

export default Section;
