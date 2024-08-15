import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

const StyledSection = styled.section`
    margin: 0 auto;
    margin-bottom: 2rem;

    @media ${device.tablet} {
        margin-bottom: 4rem;
    }
`;

interface SectionProps {
    children: React.ReactNode;
}

function Section({ children }: SectionProps) {
    return <StyledSection>{children}</StyledSection>;
}

export default Section;
