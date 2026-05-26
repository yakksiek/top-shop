import dashboardMenu from '../db/dashboardMenu.json';

const categories = dashboardMenu.map(item => item.category);
type OverviewCategory = (typeof categories)[number];

export default OverviewCategory;
