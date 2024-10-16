import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

interface StyledDashboardBodyContainerProps {
    $gap?: 'big';
    $padding: boolean;
}

export const StyledDashboardBodyContainer = styled.div<StyledDashboardBodyContainerProps>`
    padding: ${({ $padding }) => ($padding ? '2.5rem' : '0')};
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    gap: ${({ $gap }) => ($gap === 'big' ? '1.75rem' : '1rem')};

    @media ${device.desktop} {
        grid-template-columns: 50% 50%;
        grid-auto-rows: auto;
        width: var(--screen-width-large);
        max-width: var(--max-width);
        margin: 0 auto;
        align-items: start;
    }
`;
