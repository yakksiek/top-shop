import styled from 'styled-components';

const StyledCardContainer = styled.div`
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
    padding: var(--padding-dashboard-card-item);
    border-bottom: var(--border-standard);
`;

const StyledCardContent = styled.div`
    padding: var(--padding-dashboard-card-item);
`;

interface DashboardSubcategoryCardProps {
    children: React.ReactNode;
    header: React.ReactNode;
}

function DashboardSubcategoryCard({ children, header }: DashboardSubcategoryCardProps) {
    return (
        <StyledCardContainer>
            <StyledHeader>{header}</StyledHeader>
            <StyledCardContent>{children}</StyledCardContent>
        </StyledCardContainer>
    );
}

export default DashboardSubcategoryCard;
