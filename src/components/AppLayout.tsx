import styled from 'styled-components';
import Header from './Header';
// import { SearchInput } from './SearchInput';
import { NavigationMenu } from './NavigationMenu';
import Footer from './Footer';
import LoginModal from '../features/authentication/LoginModal';
import MainContent from './MainContent';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
    /* min-height: 100dvh; */
    /* padding: 0 3rem */
    width: 100%;
    margin: 0 auto;
    /* overflow: hidden; */
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
        </StyledAppLayout>
    );
}

export default AppLayout;
