import styled from 'styled-components';
import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import MyNewsletterForm from './MyNewsletterForm';

const StyledParagraph = styled.p`
    margin: 1rem 0;
`;

function MyNewsletter() {
    return (
        <section>
            <Heading as='h5' $marginBottom={true}>
                Discover the latest newsletter
            </Heading>
            <StyledParagraph>
                Receive Top Shop digital communications, for first access to latest collections, campaigns and videos.
            </StyledParagraph>
            <MyNewsletterForm />
            <Button fill={true}>Subscribe</Button>
        </section>
    );
}

export default MyNewsletter;
