import styled from 'styled-components';
import * as t from '../../types';
import Heading from '../Heading';

interface EditioralHeaderProps {
    sectionName?: t.GenderTypes | string;
    title: string;
    description: string;
}

const StyledHeader = styled.header`
    width: var(--screen-width-small);
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;

    span.section {
        font-size: 0.625rem;
    }
`;

function EditioralHeader({ sectionName, description, title }: EditioralHeaderProps) {
    return (
        <StyledHeader>
            {sectionName && <span className='section'>{sectionName?.toUpperCase()}</span>}
            <Heading as='h2' $marginBottom={true}>
                {title}
            </Heading>
            {description && <p>{description}</p>}
        </StyledHeader>
    );
}

export default EditioralHeader;
