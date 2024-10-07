import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import DashboardNavigation from '../../features/dashboard/components/DashboardNavigation';
import Section from '../../components/Section';

const StyledMain = styled.main`
    background-color: var(--color-grey-50);
    padding-bottom: 2rem;
`;

function Dashboard() {
    return (
        <div>
            <DashboardNavigation />
            <StyledMain>
                <Section>
                    {/* Put here Wrapper with padding 2rem */}
                    <Outlet />
                </Section>
            </StyledMain>
        </div>
    );
}

export default Dashboard;
