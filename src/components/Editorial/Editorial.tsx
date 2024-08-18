import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as t from '../../types';
import Products from '../Products';
import EditioralHeader from './EditioralHeader';
import EditorialVideo from './EditorialVideo';

const StyledWrapper = styled.div`
    text-align: center;
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
        <StyledWrapper>
            <EditioralHeader gender={gender} description={description} />
            <EditorialVideo videoLink={videoLink} />
            <Products products={bestsellersToRender} />
        </StyledWrapper>
    );
}

export default Editorial;
