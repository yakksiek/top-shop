import styled from 'styled-components';
import footerData from '../../db/footer.json';
import FooterContentInfoItem from './FooterContentInfoItem';
import { device } from '../../styles/breakpoints';
import Wrapper from '../Wrapper';

const StyledContainer = styled.div`
    padding: 2.75rem 0;
    display: none;

    @media ${device.desktop} {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        padding: 2.5rem 0;
        margin: 0 auto;
    }
`;

function FooterContentInfo() {
    return (
        <Wrapper type='narrow'>
            <StyledContainer>
                {footerData.categories.map((item, index) => (
                    <FooterContentInfoItem key={index} data={item} />
                ))}
            </StyledContainer>
        </Wrapper>
    );
}

export default FooterContentInfo;
