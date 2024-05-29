import { MdKeyboardArrowRight } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { device } from '../../styles/breakpoints';

type NavListTypes = 'menu' | 'submenu';

const StyledNavList = styled.ul`
    position: relative;
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

interface StyledNavItem {
    isActive: boolean;
    type: NavListTypes;
}

const StyledNavItem = styled.li<StyledNavItem>`
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 12px 16px 12px 0;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-grey-500)')};

    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover,
    &.active {
        color: var(--color-black);
        ${IconWrapper} {
            opacity: 1;
        }

        span::after {
            transform: scale(1, 1);
        }
    }

    ${({ type }) =>
        type === 'submenu' &&
        css`
            font-size: 1rem;
            line-height: 1rem;
        `}
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

interface NavListItemType {
    categoryName: string;
    path: string;
}

interface SidebarNavListProps {
    data: NavListItemType[];
    type: NavListTypes;
}

function SidebarNavList({ data, type }: SidebarNavListProps) {
    const { handleOpenSubmenu, category } = useSidebarContext();

    return (
        <StyledNavList>
            {data.map(item => (
                <StyledNavItem
                    key={item.categoryName}
                    onClick={() => handleOpenSubmenu(item.categoryName)}
                    className={category === item.categoryName ? 'active' : ''}
                    isActive={category === item.categoryName}
                    type={type}
                >
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
