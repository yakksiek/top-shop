import Logo from '../Logo';
import { StyledFooter, StyledLogoContainer } from './Footer.styled';

import footerData from '../../db/footer.json';

import Accordion from '../Accordion';
import FooterLegalList from './FooterLegalList';
import FooterContentInfo from './FooterContentInfo';

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
