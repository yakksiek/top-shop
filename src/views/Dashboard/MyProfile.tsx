import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import { StyledDashboardSubcategoryContainer } from '../../features/dashboard/components/StyledDashboardSubcategoryContainer';

function MyProfile() {
    return (
        <StyledDashboardSubcategoryContainer>
            <DashboardSubcategoryHeader title='My Profile' />
        </StyledDashboardSubcategoryContainer>
    );
}

export default MyProfile;
