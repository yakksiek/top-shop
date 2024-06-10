import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    /* padding: 0 1rem; */
`;

interface CenteredContentProps {
    children: React.ReactNode;
}

function CenteredContent({ children }: CenteredContentProps) {
    return <StyledWrapper>{children}</StyledWrapper>;
}

export default CenteredContent;
