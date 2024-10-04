import styled from 'styled-components';

const StyledMainContent = styled.div`
    background-color: var(--color-grey-0);
    padding: 1rem;
`;

interface MyProfileCardProps {
    header: React.ReactNode;
    children: React.ReactNode;
}

function MyProfileCard({ header, children }: MyProfileCardProps) {
    return (
        <div>
            <header>{header}</header>
            <StyledMainContent>{children}</StyledMainContent>
        </div>
    );
}

export default MyProfileCard;
