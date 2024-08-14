import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledHeader = styled.header`
    border-bottom: var(--border-standard);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    cursor: pointer;

    & > svg {
        font-size: 1.5rem;

        @media ${device.tablet} {
            display: none;
        }
    }
`;

export const StyledBestsellersSection = styled.div`
    margin: 1rem 0;
    padding: 0 1rem;

    h5 {
        margin-bottom: 1rem;
    }
`;
