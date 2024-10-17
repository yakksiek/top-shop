import styled from 'styled-components';
import Heading from '../../../../components/Heading';
import MyNewsletterForm from './MyNewsletterForm';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledParagraph = styled.p`
    margin: 1rem 0;
`;

function MyNewsletter() {
    return (
        <StyledSection>
            <Heading as='h5' $marginBottom={true}>
                Discover the latest newsletter
            </Heading>
            <StyledParagraph>
                Receive Top Shop digital communications, for first access to latest collections, campaigns and videos.
            </StyledParagraph>
            <MyNewsletterForm />
        </StyledSection>
    );
}

export default MyNewsletter;
