import styled from 'styled-components';
import { IconType } from 'react-icons';

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 0.875rem;
`;

interface ServcieItemType {
    label: string;
    link: string;
    icon?: IconType;
}

interface ContactUsListItemProps {
    serviceItem: ServcieItemType;
}

function ContactUsListItem({ serviceItem }: ContactUsListItemProps) {
    const { label, link } = serviceItem;

    return (
        <StyledListItem key={label}>
            {serviceItem.icon && <serviceItem.icon />}
            <div>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    {label}
                </a>
            </div>
        </StyledListItem>
    );
}

export default ContactUsListItem;
