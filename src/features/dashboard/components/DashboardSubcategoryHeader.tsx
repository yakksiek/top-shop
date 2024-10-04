import Heading from '../../../components/Heading';

interface DashboardSubcategoryHeaderProps {
    title: string;
    marginBottom?: boolean;
}

function DashboardSubcategoryHeader({ title, marginBottom = false }: DashboardSubcategoryHeaderProps) {
    return (
        <Heading as='h3' $textAlign='left' $marginBottom={marginBottom}>
            {title}
        </Heading>
    );
}

export default DashboardSubcategoryHeader;
