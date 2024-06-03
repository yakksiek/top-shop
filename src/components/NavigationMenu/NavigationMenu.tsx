import { GoArrowLeft } from 'react-icons/go';
import styled from 'styled-components';

import { useSidebarContext } from '../../contexts/SidebarContext';
import mainMenu from '../../db/mainMenu.json';
import { device } from '../../styles/breakpoints';
import NavigationMenuList from './NavigationMenuList';

import { Sidebar, Submenu } from '../Sidebar';

const StyledHeader = styled.header`
    border-bottom: var(--border-standard);
    display: flex;
    align-items: center;
    padding: 0 1vw;
    gap: 1rem;
    cursor: pointer;

    & > svg {
        font-size: 1.5rem;

        @media ${device.tablet} {
            display: none;
        }
    }
`;

function NavigationMenu() {
    const {
        isOpen,
        toggleSidebar,
        activeMainCategory,
        activeSubCategory,
        setActiveSubCategory,
        setActiveMainCategory,
    } = useSidebarContext();

    return (
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} slideFrom='left'>
            <NavigationMenuList
                data={mainMenu.categories}
                type='menu'
                clickHandler={setActiveMainCategory}
                activeCategory={activeMainCategory}
            />
            <Submenu isOpen={activeMainCategory ? true : false} slideFrom='left'>
                <StyledHeader onClick={() => setActiveMainCategory('')}>
                    <GoArrowLeft />
                    <h2>{activeMainCategory}</h2>
                </StyledHeader>
                <NavigationMenuList
                    data={mainMenu.subcategories}
                    type='submenu'
                    clickHandler={setActiveSubCategory}
                    activeCategory={activeSubCategory}
                />
                <Submenu isOpen={activeSubCategory ? true : false} slideFrom='left'>
                    <StyledHeader onClick={() => setActiveSubCategory('')}>
                        <GoArrowLeft />
                        <h2>{activeSubCategory}</h2>
                    </StyledHeader>
                </Submenu>
            </Submenu>
        </Sidebar>
    );
}

export default NavigationMenu;
