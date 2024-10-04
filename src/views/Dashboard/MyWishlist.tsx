import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import { StyledDashboardBodyContainer } from '../../features/dashboard/components/StyledDashboardCardBodyContainer';

function MyWishlist() {
    return (
        <StyledDashboardBodyContainer>
            <DashboardSubcategoryHeader title='My Wishlist' />
        </StyledDashboardBodyContainer>
    );
}

export default MyWishlist;
