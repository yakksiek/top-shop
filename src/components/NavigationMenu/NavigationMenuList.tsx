import { MdKeyboardArrowRight } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/breakpoints';
import { useSidebarContext } from '../../contexts/SidebarContext';

type NavListTypes = 'menu' | 'submenu';

const StyledNavList = styled.ul<{ $active: string }>`
    position: relative;
    margin-top: 1rem;
    padding: var(--padding-sidebar-mobile);

    ${({ $active }) =>
        $active &&
        css`
            color: var(--color-grey-500);
        `}
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

interface StyledNavItemProps {
    $isActive: boolean;
    type: NavListTypes;
}

const StyledNavItem = styled.li<StyledNavItemProps>`
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 12px 0;
    cursor: pointer;
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
    clickHandler: (name: string) => void;
    activeCategory: string;
    useLink?: boolean;
    currentPath?: string;
}

function NavigationMenuList({ data, type, clickHandler, activeCategory, useLink, currentPath }: SidebarNavListProps) {
    const { toggleSidebar } = useSidebarContext();

    return (
        <StyledNavList $active={activeCategory}>
            {data.map(item => {
                const activeItem = activeCategory === item.categoryName;
                const content = (
                    <StyledNavItem
                        key={item.categoryName}
                        onClick={() => {
                            if (activeItem) {
                                return clickHandler('');
                            }

                            clickHandler(item.categoryName);
                        }}
                        className={activeItem ? 'active' : ''}
                        $isActive={activeItem}
                        type={type}
                    >
                        <StyledLabel>{item.categoryName}</StyledLabel>
                        <IconWrapper>
                            <MdKeyboardArrowRight />
                        </IconWrapper>
                    </StyledNavItem>
                );

                return useLink ? (
                    <Link
                        to={'products' + '/' + currentPath + '/' + item.path}
                        key={item.categoryName}
                        onClick={toggleSidebar}
                    >
                        {content}
                    </Link>
                ) : (
                    content
                );
            })}
        </StyledNavList>
    );
}

export default NavigationMenuList;
