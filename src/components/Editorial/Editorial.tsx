import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
import * as t from '../../types';
import Products from '../Products';
import EditioralHeader from './EditioralHeader';
import EditorialVideo from './EditorialVideo';
import Section from '../Section';

const StyledProductsWrapper = styled.div`
    background-color: var(--color-grey-0);
    padding: 2rem 0;
    margin-bottom: 4rem;

    @media ${device.tablet} {
        padding: 3rem 5vw;
    }
`;

const StyledContent = styled.div`
    position: relative;
`;

interface Editorial {
    videoLink: string;
    description: string;
    products: t.Product[];
}

function Editorial({ videoLink, description, products }: Editorial) {
    const { gender } = useParams<{ gender: t.GenderTypes }>();

    const bestsellersToRender = products.slice(4, 8);

    return (
        <Section>
            <EditioralHeader gender={gender} description={description} />
            <StyledContent>
                <EditorialVideo videoLink={videoLink} />
                <StyledProductsWrapper>
                    <Products products={bestsellersToRender} />
                </StyledProductsWrapper>
            </StyledContent>
        </Section>
    );
}

export default Editorial;
