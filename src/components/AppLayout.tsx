import styled from 'styled-components';
import Header from './Header';
import SideBar from './Sidebar/SideBar';

const StyledAppLayout = styled.div`
    min-height: 100dvh;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <SideBar />
        </StyledAppLayout>
    );
}

export default AppLayout;
