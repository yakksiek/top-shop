import styled from 'styled-components';
import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import MyProfileContent from '../../features/dashboard/components/MyProfile/MyProfileContent';

const StyledHeaderWrapper = styled.div`
    padding: 2.5rem;
    width: var(--screen-width-large);
    max-width: var(--max-width);
    margin: 0 auto;
`;

function MyProfile() {
    return (
        <>
            <StyledHeaderWrapper>
                <DashboardSubcategoryHeader title='My Profile' marginBottom={true} />
            </StyledHeaderWrapper>
            <MyProfileContent />
        </>
    );
}

export default MyProfile;
