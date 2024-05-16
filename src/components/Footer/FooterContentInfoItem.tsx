import styled from 'styled-components';

const StyledHeading = styled.p`
    padding-bottom: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.75rem;
`;

const StyledCategoryDetailsItem = styled.li`
    margin-bottom: 1rem;
    font-weight: 200;
`;

interface FooterContentInfoItemProps {
    data: {
        headline: string;
        items: string[];
    };
}

function FooterContentInfoItem({ data }: FooterContentInfoItemProps) {
    return (
        <div>
            <StyledHeading>{data.headline}</StyledHeading>
            <ul>
                {data.items.map(link => (
                    <StyledCategoryDetailsItem>{link}</StyledCategoryDetailsItem>
                ))}
            </ul>
        </div>
    );
}

export default FooterContentInfoItem;
