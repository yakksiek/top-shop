import styled from 'styled-components';

import footerData from '../../db/footer.json';
import Logo from '../Logo';
import Accordion from '../Accordion';
import FooterLegalList from './FooterLegalList';
import FooterContentInfo from './FooterContentInfo';
import { device } from '../../styles/breakpoints';

export const StyledFooter = styled.footer`
    border-top: var(--border-standard);
    margin: 0 auto;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
`;

export const StyledLogoContainer = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    order: -1;

    @media ${device.desktop} {
        order: 1;
        padding: 0;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <StyledLogoContainer>
                <Logo as='h4' />
            </StyledLogoContainer>
            <Accordion data={footerData.categories} />
            <FooterContentInfo />
            <FooterLegalList />
        </StyledFooter>
    );
}

export default Footer;
