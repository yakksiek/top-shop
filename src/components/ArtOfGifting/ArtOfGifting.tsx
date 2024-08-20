import styled from 'styled-components';
import EditioralHeader from '../Editorial/EditioralHeader';
import Section from '../Section';

import imgArtOfGifting from '../../images/art-of-gifting.avif';
import StickyEditorialWrapper from '../Editorial/StickyEditorialWrapper';
import servicesData from '../../db/services.json';
import { device } from '../../styles/breakpoints';
import ServicesItem from './ServicesItem';
import StyledEditorialContentWrapper from '../Editorial/EditorialContentWrapper';

const StyledContent = styled.div``;

const StyledServicesList = styled.ul`
    display: grid;
    background-color: var(--color-grey-0);
    grid-gap: 1rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function ArtOfGiting() {
    return (
        <Section>
            <EditioralHeader
                sectionName='Gifts & Services'
                description='Our personal selection of presents'
                title='Art of Giving'
            />
            <StyledContent>
                <StickyEditorialWrapper>
                    <img src={imgArtOfGifting} alt='presents' />
                </StickyEditorialWrapper>
                <StyledEditorialContentWrapper>
                    <StyledServicesList>
                        {servicesData.map(servicesItem => (
                            <ServicesItem key={servicesItem.name} servicesItem={servicesItem} />
                        ))}
                    </StyledServicesList>
                </StyledEditorialContentWrapper>
            </StyledContent>
        </Section>
    );
}

export default ArtOfGiting;
