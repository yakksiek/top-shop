import styled from 'styled-components';
import Heading from '../../components/Heading';
import MyProfileContent from '../../features/dashboard/components/MyProfile/MyProfileContent';

const StyledWrapper = styled.div`
    padding: 2rem;
`;

function MyProfile() {
    return (
        <StyledWrapper>
            <Heading as='h3' $textAlign='left' $marginBottom={true}>
                My Profile
            </Heading>
            <MyProfileContent />
        </StyledWrapper>
    );
}

export default MyProfile;
