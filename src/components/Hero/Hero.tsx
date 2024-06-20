import styled from 'styled-components';

import CenteredContent from '../CenteredContent';
import Section from '../Section';
import { BASE_URL } from '../../contants/api';

interface StyledHeroProps {
    $heroImage: string;
}

const StyledHero = styled.div<StyledHeroProps>`
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: right;
    background-image: ${({ $heroImage }) => `url(${$heroImage})`};

    display: flex;
    align-items: flex-end;
    justify-content: center;

    margin-bottom: 4.5rem;
`;

const StyledContentWrapper = styled.div`
    text-align: center;
    color: var(--color-grey-0);
    padding: 2rem 0;

    button.hero-btn {
        background-color: transparent;
        border: none;
        margin-top: 1rem;
        border-bottom: 1px solid white;
        font-weight: 500;
        cursor: pointer;
    }
`;

interface HeroProps {
    heroImage: string;
}

function Hero({ heroImage }: HeroProps) {
    return (
        <Section>
            <StyledHero $heroImage={`${BASE_URL}${heroImage}`}>
                <CenteredContent>
                    <StyledContentWrapper>
                        <h2>Summer Promotion up to 75% off</h2>
                        <p>Only the Best Deals</p>
                        <button className='hero-btn'>Check our products</button>
                    </StyledContentWrapper>
                </CenteredContent>
            </StyledHero>
        </Section>
    );
}

export default Hero;
