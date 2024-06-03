import styled from 'styled-components';
import Header from './Header';
import { SearchInput } from './SearchInput';
import { NavigationMenu } from './NavigationMenu';
import Footer from './Footer';
import LoginModal from '../features/authentication/LoginModal';

const StyledAppLayout = styled.div`
    /* min-height: 100dvh; */
    /* padding: 0 3rem */
    width: 100%;
    margin: 0 auto;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <SearchInput />
            <NavigationMenu />
            <LoginModal />
            <Footer />
        </StyledAppLayout>
    );
}

export default AppLayout;
