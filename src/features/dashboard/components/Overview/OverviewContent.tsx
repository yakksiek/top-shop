import dashboardMenu from '../../../../db/dashboardMenu.json';
import * as t from '../../../../types';
import { StyledDashboardSubcategoryContainer } from '../StyledDashboardSubcategoryContainer';
import OverviewCard from './OverviewCard';
import OverviewMyOrders from './OverviewMyOrders';
import OverviewMyProfile from './OverviewMyProfile';
import OverviewMyWishlist from './OverviewMyWishlist';

const overviewCardsContent: Record<t.OverviewCategory, JSX.Element> = {
    'My Profile': <OverviewMyProfile />,
    'My Orders': <OverviewMyOrders />,
    'My Wishlist': <OverviewMyWishlist />,
};

function OverviewContent() {
    const headers = dashboardMenu.map(categoryObj => categoryObj.category).slice(1);

    const renderedCards = headers.map(headerTitle => {
        return (
            <OverviewCard key={headerTitle} title={headerTitle}>
                {overviewCardsContent[headerTitle]}
            </OverviewCard>
        );
    });

    return <StyledDashboardSubcategoryContainer>{renderedCards}</StyledDashboardSubcategoryContainer>;
}

export default OverviewContent;
