import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as t from '../../types';
import Heading from '../Heading';
import artOfGiftingImg from '../../images/art-of-gifting-small.jpg';
import personalisationImg from '../../images/personalisation.jpg';
import servicesImg from '../../images/services.webp';

const images = {
    services: servicesImg,
    'art-of-gifting': artOfGiftingImg,
    personalisation: personalisationImg,
};

const StyledTextWrapper = styled.div`
    text-align: center;
`;

const StyledNavList = styled.nav`
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    a {
        box-shadow: var(--text-underline);
        font-size: 0.875rem;
    }
`;

interface ServicesItemProps {
    servicesItem: t.ServicesItem;
}

function ServicesItem({ servicesItem }: ServicesItemProps) {
    const { name, links, imgKey } = servicesItem;
    const image = images[imgKey as keyof typeof images];

    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <StyledTextWrapper>
                <Heading as='h4'>{name}</Heading>
                <StyledNavList>
                    {links.map(linkItem => (
                        <Link key={linkItem.label} to={linkItem.path}>
                            {linkItem.label}
                        </Link>
                    ))}
                </StyledNavList>
            </StyledTextWrapper>
        </div>
    );
}

export default ServicesItem;
