import styled from 'styled-components';
import Header from './Header';
import { Sidebar } from './Sidebar';

const StyledAppLayout = styled.div`
    min-height: 100dvh;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <Sidebar />
        </StyledAppLayout>
    );
}

export default AppLayout;
