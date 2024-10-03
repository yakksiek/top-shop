import DashboardWelcomeImage from '../../features/dashboard/components/DashboardWelcomeImage';
import Identity from '../../features/dashboard/components/Identity';
import OverviewContent from '../../features/dashboard/components/OverviewContent';

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
