import styled from 'styled-components';
import MyProfileContent from '../../features/dashboard/components/MyProfile/MyProfileContent';
import DashboardCategoryHeader from '../../features/dashboard/DashboardCategoryHeader';

const StyledWrapper = styled.div`
    padding: 2rem;
`;

function MyProfile() {
    return (
        <StyledWrapper>
            <DashboardCategoryHeader title='My Profile' />
            <MyProfileContent />
        </StyledWrapper>
    );
}

export default MyProfile;
