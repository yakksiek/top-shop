import Heading from '../../components/Heading';

function DashboardCategoryHeader({ title }: { title: string }) {
    return (
        <Heading as='h3' $textAlign='left' $marginBottom={true}>
            {title}
        </Heading>
    );
}

export default DashboardCategoryHeader;
