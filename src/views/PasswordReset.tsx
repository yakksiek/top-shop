import Heading from '../components/Heading';
import Section from '../components/Section';
import Wrapper from '../components/Wrapper';
import ChangePasswordForm from '../features/authentication/ChangePasswordForm';

function PasswordReset() {
    return (
        <Section>
            <Wrapper type='narrow'>
                <Heading as='h3'>My Top Shop Password Reset</Heading>
                <ChangePasswordForm />
            </Wrapper>
        </Section>
    );
}

export default PasswordReset;
