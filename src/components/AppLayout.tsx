import styled from 'styled-components';
import Header from './Header';
import { SearchInput } from './SearchInput';
import { NavigationMenu } from './NavigationMenu';
import Footer from './Footer';
import LoginModal from '../features/authentication/LoginModal';
import MainContent from './MainContent';

const StyledAppLayout = styled.div`
    /* min-height: 100dvh; */
    /* padding: 0 3rem */
    width: 100%;
    margin: 0 auto;
`;

interface AppLayoutProps {
    children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <StyledAppLayout>
            <MainContent>
                <Header />
                <SearchInput />
                <NavigationMenu />
                <LoginModal />
                {children}
            </MainContent>
            <Footer />
        </StyledAppLayout>
    );
}

export default AppLayout;
