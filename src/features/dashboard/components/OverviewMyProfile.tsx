import styled from 'styled-components';

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

/* margin-top and the generic tags styled in OvervieCard */

const StyledContactServicesList = styled.ul`
    display: flex;
    border: var(--border-standard);
    margin: 1rem 0;

    & > * {
        flex: 1;
    }

    li {
        padding: 2rem 0.5rem 1rem;
        border-right: var(--border-standard);
        text-align: center;
        cursor: pointer;
        position: relative;

        &:last-child {
            border: none;
        }

        .check-mark {
            position: absolute;
            left: 65%;
            top: 15%;
            color: var(--color-red-700);
        }
    }
`;

const StyledIconWrapper = styled.div`
    svg {
        font-size: 1.25rem;
    }
`;

const contactData = [
    { name: 'Email newsletter', icon: <MailIcon /> },
    { name: 'Phone', icon: <PhoneIcon /> },
    { name: 'Text Chat app', icon: <TextChatIcon /> },
    { name: 'Mail', icon: <PostcardIcon /> },
];

function OverviewMyProfile() {
    const { user } = useUser();
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
