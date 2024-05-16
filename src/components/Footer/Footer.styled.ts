import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledFooter = styled.footer`
    border-top: var(--border-standard);
    width: 95vw;
    margin: 0 auto;
    font-size: 0.75rem;

    @media ${device.desktop} {
        padding-left: 4.6875vw;
        padding-right: 4.6875vw;
    }
`;

export const StyledLogoContainer = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;
