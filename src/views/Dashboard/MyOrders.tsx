import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import { StyledDashboardBodyContainer } from '../../features/dashboard/components/StyledDashboardCardBodyContainer';

function MyOrders() {
    return (
        <StyledDashboardBodyContainer>
            <DashboardSubcategoryHeader title='My Orders' />
        </StyledDashboardBodyContainer>
    );
}

export default MyOrders;
