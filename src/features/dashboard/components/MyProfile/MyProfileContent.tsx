import styled from 'styled-components';
import * as t from '../../../../types';
import DashboardSubcategoryCard from '../DashboardSubcategoryCard';
import { StyledDashboardSubcategoryContainer } from '../StyledDashboardSubcategoryContainer';
import LoginInformation from './LoginInformation';
import MyAddressBook from './MyAddressBook';
import MyNewsletter from './MyNewsletter';
import PersonalInformation from './PersonalInformation';
import Heading from '../../../../components/Heading';

const StyledCardHeader = styled.div`
    /* background-color: red !important; */
`;

const myProfileContent: Record<t.MyProfileCardTypes, JSX.Element> = {
    'Personal Information': <PersonalInformation />,
    'My newsletter': <MyNewsletter />,
    'Login Information': <LoginInformation />,
    'My Address Book': <MyAddressBook />,
};

function MyProfileContent() {
    const renderedCards = (Object.entries(myProfileContent) as [t.MyProfileCardTypes, JSX.Element][]).map(
        ([item, component]) => {
            return (
                <DashboardSubcategoryCard
                    key={item}
                    header={
                        <StyledCardHeader>
                            <Heading as='h4' $textAlign='left'>
                                {item}
                            </Heading>
                        </StyledCardHeader>
                    }
                >
                    {component}
                </DashboardSubcategoryCard>
            );
        },
    );

    return <StyledDashboardSubcategoryContainer>{renderedCards}</StyledDashboardSubcategoryContainer>;
}

export default MyProfileContent;
