import DashboardSubcategoryHeader from '../../features/dashboard/components/DashboardSubcategoryHeader';
import { StyledDashboardSubcategoryContainer } from '../../features/dashboard/components/StyledDashboardSubcategoryContainer';

function MyWishlist() {
    return (
        <StyledDashboardSubcategoryContainer>
            <DashboardSubcategoryHeader title='My Wishlist' />
        </StyledDashboardSubcategoryContainer>
    );
}

export default MyWishlist;
