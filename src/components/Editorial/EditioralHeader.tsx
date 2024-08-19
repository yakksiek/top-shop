import styled from 'styled-components';
import * as t from '../../types';
import Heading from '../Heading';

interface EditioralHeaderProps {
    gender?: t.GenderTypes | string;
    description?: string;
}

const StyledHeader = styled.header`
    width: var(--screen-width-small);
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;

    span.gender {
        font-size: 0.625rem;
    }
`;

function EditioralHeader({ gender, description }: EditioralHeaderProps) {
    return (
        <StyledHeader>
            {gender && <span className='gender'>{gender?.toUpperCase()}</span>}
            <Heading as='h2' $marginBottom={true}>
                Discover the Selection
            </Heading>
            {description && <p>{description}</p>}
        </StyledHeader>
    );
}

export default EditioralHeader;
