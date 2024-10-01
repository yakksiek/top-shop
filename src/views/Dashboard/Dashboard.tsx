import { Outlet } from 'react-router-dom';
import DashboardNavigation from '../../features/dashboard/components/DashboardNavigation';

function Dashboard() {
    return (
        <div>
            <DashboardNavigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;
