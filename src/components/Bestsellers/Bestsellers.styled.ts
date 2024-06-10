import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
