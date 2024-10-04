import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import { StyledDashboardSubcategoryContainer } from '../../features/dashboard/components/StyledDashboardSubcategoryContainer';

function MyOrders() {
    return (
        <StyledDashboardSubcategoryContainer>
            <DashboardSubcategoryHeader title='My Orders' />
        </StyledDashboardSubcategoryContainer>
    );
}

export default MyOrders;
