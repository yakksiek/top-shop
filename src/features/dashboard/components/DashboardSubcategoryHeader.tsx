import Heading from '../../../components/Heading';

interface DashboardSubcategoryHeaderProps {
    title: string;
}

function DashboardSubcategoryHeader({ title }: DashboardSubcategoryHeaderProps) {
    return (
        <Heading as='h3' $textAlign='left'>
            {title}
        </Heading>
    );
}

export default DashboardSubcategoryHeader;
