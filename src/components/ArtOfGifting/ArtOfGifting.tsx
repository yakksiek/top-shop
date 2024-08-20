import { useRef } from 'react';
import styled from 'styled-components';
import EditioralHeader from '../Editorial/EditioralHeader';
import Section from '../Section';

import { device } from '../../styles/breakpoints';
import servicesData from '../../db/services.json';
import useZoomOnScroll from '../../hooks/useZoomOnScroll';
import imgArtOfGifting from '../../images/art-of-gifting.webp';
import StyledEditorialContentWrapper from '../Editorial/EditorialContentWrapper';
import StickyEditorialWrapper from '../Editorial/StickyEditorialWrapper';
import ServicesItem from './ServicesItem';

const StyledServicesList = styled.ul`
    display: grid;
    background-color: var(--color-grey-0);
    grid-gap: 1rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const StyledImg = styled.img`
    width: 100%;
    transition: transform 0.1s linear;
    transform-origin: center;
    height: 100%;
    overflow: clip;
    z-index: -1;
`;

function ArtOfGiting() {
    const imgRef = useRef<HTMLImageElement>(null);
    const { scale } = useZoomOnScroll({ imgRef });

    return (
        <Section>
            <EditioralHeader
                sectionName='Gifts & Services'
                description='Our personal selection of presents'
                title='Art of Giving'
            />
            <div>
                <StickyEditorialWrapper>
                    <StyledImg
                        src={imgArtOfGifting}
                        alt='presents'
                        ref={imgRef}
                        style={{ transform: `scale(${scale})` }}
                    />
                </StickyEditorialWrapper>
                <StyledEditorialContentWrapper>
                    <StyledServicesList>
                        {servicesData.map(servicesItem => (
                            <ServicesItem key={servicesItem.name} servicesItem={servicesItem} />
                        ))}
                    </StyledServicesList>
                </StyledEditorialContentWrapper>
            </div>
        </Section>
    );
}

export default ArtOfGiting;
