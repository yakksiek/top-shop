import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';

import * as h from '../../../../utils/helpers';
import {
    Checkmark,
    CrossIcon,
    LocationIcon,
    MailIcon,
    PersonIcon,
    PhoneIcon,
    PostcardIcon,
    TextChatIcon,
} from '../../../../shared/icons';
import { useUser } from '../../../authentication/useUser';
import { StyledIconWrapper, StyledContactServicesList } from './OverviewMyProfile.styled';
import { Link, useNavigate } from 'react-router-dom';

/* margin-top and the generic tags styled in OverviewCard */

const contactData = [
    { name: 'mail', label: 'Email newsletter', icon: <MailIcon /> },
    { name: 'phone', label: 'Phone', icon: <PhoneIcon /> },
    { name: 'text', label: 'Text Chat app', icon: <TextChatIcon /> },
    { name: 'post', label: 'Mail', icon: <PostcardIcon /> },
];

function OverviewMyProfile() {
    const navigate = useNavigate();
    const { user } = useUser();

    // user always present when logged in
    const { email, user_metadata } = user!;
    const { userContactPreferences } = h.getUserMetadata(user_metadata);

    const renderedContactServices = contactData.map(contact => {
        const isContactChecked = userContactPreferences.includes(contact.name);
        const iconRendered = isContactChecked ? (
            <Checkmark className='check-mark checked' />
        ) : (
            <CrossIcon className='check-mark unchecked' />
        );

        return (
            <li key={contact.name}>
                <Link to='/dashboard/profile'>
                    {iconRendered}
                    <StyledIconWrapper>{contact.icon}</StyledIconWrapper>
                    <span>{contact.label}</span>
                </Link>
            </li>
        );
    });

    const handleClick = () => {
        navigate('/dashboard/profile');
    };

    return (
        <div>
            <span>Login: {email}</span>

            <div className='margin-top'>
                <Heading as='h5' $marginBottom={true}>
                    Contact preferences
                </Heading>
            </div>

            <StyledContactServicesList>{renderedContactServices}</StyledContactServicesList>

            <Button fill={true} onClick={handleClick}>
                <PersonIcon />
                Edit My Profile
            </Button>
            <Button onClick={handleClick}>
                <LocationIcon />
                Edit my addresses
            </Button>
        </div>
    );
}

export default OverviewMyProfile;
