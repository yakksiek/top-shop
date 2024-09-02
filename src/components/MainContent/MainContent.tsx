import styled from 'styled-components';

interface MainContentProps {
    children: React.ReactNode;
}

const StyledMainContent = styled.div`
    width: 100%;
`;

function MainContent({ children }: MainContentProps) {
    return <StyledMainContent>{children}</StyledMainContent>;
}

export default MainContent;
