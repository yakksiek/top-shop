import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';

const StyledProductsWrapper = styled.div`
    background-color: var(--color-grey-0);
    padding: 2rem 6.4vw;
    margin-bottom: 4rem;

    @media ${device.tablet} {
        padding: 3rem 8.5vw;
    }

    @media ${device.desktop} {
        padding: 3rem 15vw;
    }
`;

export default StyledProductsWrapper;
