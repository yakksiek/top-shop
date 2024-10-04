import DashboardWelcomeImage from '../../features/dashboard/components/DashboardWelcomeImage';
import Identity from '../../features/dashboard/components/Overview/Identity';
import OverviewContent from '../../features/dashboard/components/Overview/OverviewContent';

function Overview() {
    return (
        <div>
            <DashboardWelcomeImage />
            <Identity />
            <OverviewContent />
        </div>
    );
}

export default Overview;
