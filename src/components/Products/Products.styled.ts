import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

interface StyledProductsListProps {
    $gapY: boolean;
}

export const StyledProductsList = styled.ul<StyledProductsListProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: ${({ $gapY }) => ($gapY ? '1rem' : 0)};

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 2rem;
    }
`;
