import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';
// import { SearchInput } from './SearchInput';
import Header from './Header';
import { NavigationMenu } from './NavigationMenu';
import Footer from './Footer';
import LoginModal from '../features/authentication/LoginModal';
import MainContent from './MainContent';

const StyledAppLayout = styled.div`
    width: 100%;
    margin: 0 auto;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <MainContent>
                <Header />
                {/* <SearchInput /> */}
                <NavigationMenu />
                <LoginModal />
                <Outlet />
            </MainContent>
            <Footer />
            <ScrollRestoration />
        </StyledAppLayout>
    );
}

export default AppLayout;
