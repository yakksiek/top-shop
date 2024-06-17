import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

const StyledModalWrapper = styled.div`
    margin: 0 auto;
    padding: var(--padding-sidebar-mobile);

    h4 {
        font-weight: 400;
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.75rem;
    }

    @media ${device.tablet} {
        padding: 1rem 4rem;
    }
`;

export default StyledModalWrapper;
