import styled from 'styled-components';

import * as t from '../../../../types';
import DashboardSubcategoryHeader from '../DashboardSubcategoryHeader';

const StyledCardContainer = styled.div`
    --card-padding: 1.5rem;
    background-color: var(--color-grey-0);

    .margin-top {
        margin-top: 1rem;
    }

    span {
        font-size: 0.875rem;
        margin-bottom: 1rem;
    }
`;

const StyledHeader = styled.header`
    padding: var(--card-padding);
    border-bottom: var(--border-standard);
`;

const StyledCardContent = styled.div`
    padding: var(--card-padding);
`;

interface OverviewCardProps {
    title: t.OverviewCategory;
    children: React.ReactNode;
}

function OverviewCard({ title, children }: OverviewCardProps) {
    return (
        <StyledCardContainer>
            <StyledHeader>
                <DashboardSubcategoryHeader title={title} />
            </StyledHeader>
            <StyledCardContent>{children}</StyledCardContent>
        </StyledCardContainer>
    );
}

export default OverviewCard;
