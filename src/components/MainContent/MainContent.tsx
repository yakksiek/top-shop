import styled from 'styled-components';

interface MainContentProps {
    children: React.ReactNode;
}

const StyledMainContent = styled.div`
    width: 100%;
    flex: 1;
`;

function MainContent({ children }: MainContentProps) {
    return <StyledMainContent>{children}</StyledMainContent>;
}

export default MainContent;
