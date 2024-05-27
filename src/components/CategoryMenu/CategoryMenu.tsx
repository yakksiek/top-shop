import styled from 'styled-components';
import Wrapper from '../Wrapper';

const StyledContainer = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem;
`;

function CategoryMenu() {
    return (
        <Wrapper type='wide'>
            <StyledContainer>CategoryMenu / Men / bags </StyledContainer>
        </Wrapper>
    );
}

export default CategoryMenu;
