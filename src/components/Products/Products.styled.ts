import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledProductsWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 2rem;
    }
`;
