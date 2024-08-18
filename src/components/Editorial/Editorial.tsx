import { useParams } from 'react-router-dom';
import EditorialVideo from './EditorialVideo';
import EditioralHeader from './EditioralHeader';
import * as t from '../../types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    text-align: center;
`;

interface Editorial {
    videoLink: string;
    description: string;
}

function Editorial({ videoLink, description }: Editorial) {
    const { gender } = useParams<{ gender: t.GenderTypes }>();

    return (
        <StyledWrapper>
            <EditioralHeader gender={gender} description={description} />
            <EditorialVideo videoLink={videoLink} />
        </StyledWrapper>
    );
}

export default Editorial;
