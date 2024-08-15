import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled from 'styled-components';
import LoginModal from '../features/authentication/Identification';
import Footer from './Footer';
import Header from './Header';
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
                <LoginModal />
                <Outlet />
            </MainContent>
            <Footer />
            <ScrollRestoration />
        </StyledAppLayout>
    );
}

export default AppLayout;
