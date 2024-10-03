import styled from 'styled-components';

import * as t from '../../../types';
import dashboardMenu from '../../../db/dashboardMenu.json';
import OverviewCard from './OverviewCard';
import OverviewMyProfile from './OverviewMyProfile';
import OverviewMyOrders from './OverviewMyOrders';
import OverviewMyWishlist from './OverviewMyWishlist';
import { device } from '../../../styles/breakpoints';

const StyledOverviewContent = styled.div`
    padding: 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr;
        width: var(--screen-width-large);
        max-width: var(--max-width);
        margin: 0 auto;
    }
`;

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

    return <StyledOverviewContent>{renderedCards}</StyledOverviewContent>;
}

export default OverviewContent;
