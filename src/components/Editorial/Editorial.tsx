import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as t from '../../types';
import Products from '../Products';
import EditioralHeader from './EditioralHeader';
import EditorialVideo from './EditorialVideo';
import Section from '../Section';
import StyledEditorialContentWrapper from './EditorialContentWrapper';

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
            <EditioralHeader sectionName={gender} description={description} title='Apparel and accessories' />
            <StyledContent>
                <EditorialVideo videoLink={videoLink} />
                <StyledEditorialContentWrapper>
                    <Products products={bestsellersToRender} />
                </StyledEditorialContentWrapper>
            </StyledContent>
        </Section>
    );
}

export default Editorial;