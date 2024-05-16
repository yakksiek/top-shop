import styled from 'styled-components';
import footerData from '../../db/footer.json';
import FooterContentInfoItem from './FooterContentInfoItem';
import { device } from '../../styles/breakpoints';

const StyledContainer = styled.div`
    padding: 2.5vw 0;
    display: none;

    @media ${device.desktop} {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        width: 80vw;
        max-width: 2400px;
        margin: 0 auto;
    }
`;

function FooterContentInfo() {
    return (
        <StyledContainer>
            {footerData.categories.map(item => (
                <FooterContentInfoItem data={item} />
            ))}
        </StyledContainer>
    );
}

export default FooterContentInfo;
