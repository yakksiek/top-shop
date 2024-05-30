import styled from 'styled-components';
import Header from './Header';
import { SearchInput } from './SearchInput';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

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
            <Sidebar />
            <Footer />
        </StyledAppLayout>
    );
}

export default AppLayout;
