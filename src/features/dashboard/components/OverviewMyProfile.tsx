import Button from '../../../components/Button';
import Heading from '../../../components/Heading';
import {
    CrossIcon,
    LocationIcon,
    MailIcon,
    PersonIcon,
    PhoneIcon,
    PostcardIcon,
    TextChatIcon,
} from '../../../shared/icons';
import { useUser } from '../../authentication/useUser';
import { StyledIconWrapper, StyledContactServicesList } from './OverviewMyProfile.styled';

/* margin-top and the generic tags styled in OverviewCard */

const contactData = [
    { name: 'Email newsletter', icon: <MailIcon /> },
    { name: 'Phone', icon: <PhoneIcon /> },
    { name: 'Text Chat app', icon: <TextChatIcon /> },
    { name: 'Mail', icon: <PostcardIcon /> },
];

function OverviewMyProfile() {
    const { user } = useUser();

    // user always present when logged in
    const { email } = user!;

    const renderedContactServices = contactData.map(contact => {
        return (
            <li key={contact.name}>
                <CrossIcon className='check-mark' />
                <StyledIconWrapper>{contact.icon}</StyledIconWrapper>
                <span>{contact.name}</span>
            </li>
        );
    });

    return (
        <div>
            <span>Login: {email}</span>

            <div className='margin-top'>
                <Heading as='h5' $marginBottom={true}>
                    Contact preferences
                </Heading>
            </div>

            <StyledContactServicesList>{renderedContactServices}</StyledContactServicesList>

            <Button fill={true}>
                <PersonIcon />
                Edit My Profile
            </Button>
            <Button>
                <LocationIcon />
                Edit my addresses
            </Button>
        </div>
    );
}

export default OverviewMyProfile;
