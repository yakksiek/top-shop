import { useRef } from 'react';
import styled from 'styled-components';
import EditioralHeader from '../Editorial/EditioralHeader';
import Section from '../Section';

import servicesData from '../../db/services.json';
import useZoomOnScroll from '../../hooks/useZoomOnScroll';
import imgArtOfGifting from '../../images/art-of-gifting.webp';
import { device } from '../../styles/breakpoints';
import StickyEditorialWrapper from '../Editorial/StickyEditorialWrapper';
import Slider from '../MobileSlider';
import StyledEditorialContentWrapper from '../../features/product/components/Products/StyledProductsWrapper';

import ServicesItem from './ServicesItem';

const StyledServicesList = styled.ul`
    background-color: var(--color-grey-0);

    @media ${device.tablet} {
        display: grid;
        grid-gap: 1rem;
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

const StyledMainContentWrapper = styled.div`
    > :first-child {
        display: none;

        @media ${device.tablet} {
            display: block;
        }
    }

    > :nth-child(2) {
        @media ${device.tablet} {
            display: none;
        }
    }
`;

const SliderWrapper = styled(StyledEditorialContentWrapper)`
    padding: 2rem 0;
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
                <StyledMainContentWrapper>
                    <StyledEditorialContentWrapper>
                        <StyledServicesList>
                            {servicesData.map(servicesItem => (
                                <ServicesItem key={servicesItem.name} servicesItem={servicesItem} />
                            ))}
                        </StyledServicesList>
                    </StyledEditorialContentWrapper>
                    <SliderWrapper>
                        <Slider>
                            {servicesData.map(serviceItem => (
                                <ServicesItem key={serviceItem.name} servicesItem={serviceItem} />
                            ))}
                        </Slider>
                    </SliderWrapper>
                </StyledMainContentWrapper>
            </div>
        </Section>
    );
}

export default ArtOfGiting;
