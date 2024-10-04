import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const StyledDashboardSubcategoryContainer = styled.div`
    padding: 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        width: var(--screen-width-large);
        max-width: var(--max-width);
        margin: 0 auto;
        align-items: start;
    }
`;
