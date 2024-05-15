import styled from 'styled-components';
import Header from './Header';
import { SearchInput } from './SearchInput';
import { Sidebar } from './Sidebar';

const StyledAppLayout = styled.div`
    /* min-height: 100dvh; */
    /* padding: 0 3rem */
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Header />
            <SearchInput />
            <Sidebar />
        </StyledAppLayout>
    );
}

export default AppLayout;
