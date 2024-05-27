import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { device } from '../../styles/breakpoints';
import mainMenu from '../../db/mainMenu.json';

const StyledNavList = styled.ul`
    &:hover {
        color: var(--color-grey-500);
    }
`;

const IconWrapper = styled.span`
    transition: opacity var(--animation-and-timing);

    @media ${device.tablet} {
        opacity: 0;
    }
`;

const StyledNavItem = styled.li`
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 12px 16px 12px 0;
    cursor: pointer;

    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover {
        color: var(--color-black);
        ${IconWrapper} {
            opacity: 1;
        }

        span::after {
            transform: scale(1, 1);
        }
    }
`;

const StyledLabel = styled.span`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        height: 0.075rem;
        background-color: var(--color-black);
        bottom: -1rem;

        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease;
    }
`;

function SidebarNavList() {
    return (
        <StyledNavList>
            {mainMenu.categories.map(item => (
                <StyledNavItem key={item.categoryName}>
                    <StyledLabel>{item.categoryName}</StyledLabel>
                    <IconWrapper>
                        <MdKeyboardArrowRight />
                    </IconWrapper>
                </StyledNavItem>
            ))}
        </StyledNavList>
    );
}

export default SidebarNavList;
