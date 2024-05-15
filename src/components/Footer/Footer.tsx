import Logo from '../Logo';
import { StyledFooter, StyledLogoContainer } from './Footer.styled';

import Accordion from '../Accordion';

function Footer() {
    return (
        <StyledFooter>
            <StyledLogoContainer>
                <Logo as='h4' />
            </StyledLogoContainer>
            <Accordion />
        </StyledFooter>
    );
}

export default Footer;
