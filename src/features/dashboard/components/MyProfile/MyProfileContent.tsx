import Heading from '../../../../components/Heading';
import * as t from '../../../../types';
import { StyledDashboardBodyContainer } from '../StyledDashboardCardBodyContainer';
import LoginInformation from './LoginInformation';
import MyAddressBook from './MyAddressBook';
import MyNewsletter from './MyNewsletter';
import MyProfileCard from './MyProfileCard';
import PersonalInformation from './PersonalInformation';

const myProfileContent: Record<t.MyProfileCardTypes, JSX.Element> = {
    'Personal Information': <PersonalInformation />,
    'My newsletter': <MyNewsletter />,
    'Login Information': <LoginInformation />,
    'My Address Book': <MyAddressBook />,
};

function MyProfileContent() {
    const renderedCards = (Object.entries(myProfileContent) as [t.MyProfileCardTypes, JSX.Element][]).map(
        ([item, component]) => {
            const Header = (
                <Heading as='h4' $textAlign='left' $marginBottom={true}>
                    {item}
                </Heading>
            );

            return (
                <MyProfileCard key={item} header={Header}>
                    {component}
                </MyProfileCard>
            );
        },
    );

    return (
        <StyledDashboardBodyContainer $gap='big' $padding={false}>
            {renderedCards}
        </StyledDashboardBodyContainer>
    );
}

export default MyProfileContent;
