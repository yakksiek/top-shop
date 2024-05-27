import styled from 'styled-components';
import footerData from '../../db/footer.json';
import { device } from '../../styles/breakpoints';
import Wrapper from '../Wrapper';

const StyledWrapper = styled.div`
    border-top: var(--border-standard);
`;

const StyledContainer = styled.div`
    padding: 2.5rem 0;

    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${device.desktop} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

const StyledLegalList = styled.ul`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    justify-content: center;
    padding: 0.5rem 0;
`;

const StyledLegalInfo = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;

    p {
        text-align: center;
        font-size: 0.9rem;
    }
`;

function FooterLegalList() {
    return (
        <StyledWrapper>
            <Wrapper type='narrow'>
                <StyledContainer>
                    <StyledLegalList>
                        {footerData.legal.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </StyledLegalList>
                    <StyledLegalInfo>
                        <p>© 2024 John Doe. All rights reserved.</p>
                    </StyledLegalInfo>
                </StyledContainer>
            </Wrapper>
        </StyledWrapper>
    );
}

export default FooterLegalList;
