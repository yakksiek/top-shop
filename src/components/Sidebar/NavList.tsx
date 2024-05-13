import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const menuData = ['Men', 'Women', 'Children', 'Pets'];

const StyledNavList = styled.ul`
    &:hover {
        color: var(--color-grey-500);
    }
`;

const IconWrapper = styled.span`
    opacity: 0;
    transition: opacity var(--hamburger-animation-timing);
`;

const StyledNavItem = styled.li`
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 12px 16px 12px 0;
    cursor: pointer;

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

const StyledNavButton = styled.button`
    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
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

function NavList() {
    return (
        <StyledNavList>
            {menuData.map(item => (
                <StyledNavItem key={item}>
                    <StyledNavButton>
                        <StyledLabel>{item}</StyledLabel>
                        <IconWrapper>
                            <MdKeyboardArrowRight />
                        </IconWrapper>
                    </StyledNavButton>
                </StyledNavItem>
            ))}
        </StyledNavList>
    );
}

export default NavList;
