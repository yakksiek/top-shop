import { GoArrowLeft } from 'react-icons/go';
import styled from 'styled-components';

import { useSidebarContext } from '../../contexts/SidebarContext';
import mainMenu from '../../db/mainMenu.json';
import { device } from '../../styles/breakpoints';
import NavigationMenuList from './NavigationMenuList';

import { NavLink } from 'react-router-dom';
import { Sidebar, Submenu } from '../Sidebar';

const StyledHeader = styled.header`
    border-bottom: var(--border-standard);
    display: flex;
    align-items: center;
    padding: 0 1rem;
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

    const subCategoryGroup = mainMenu.subcategories.find(subcategory => {
        return subcategory.path === activeSubCategory.toLowerCase();
    });

    return (
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} slideFrom='left'>
            <NavigationMenuList
                data={mainMenu.categories}
                type='menu'
                clickHandler={setActiveMainCategory}
                activeCategory={activeMainCategory}
            />

            <Submenu isOpen={activeMainCategory ? true : false} slideFrom='left'>
                <StyledHeader>
                    <NavLink
                        to={activeMainCategory.toLocaleLowerCase()}
                        onClick={() => {
                            toggleSidebar();
                            setActiveMainCategory('');
                        }}
                    >
                        <h2>{activeMainCategory}</h2>
                    </NavLink>
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
                        <NavLink
                            to={`${activeMainCategory.toLocaleLowerCase()}/${activeSubCategory.toLowerCase()}`}
                            onClick={() => {
                                toggleSidebar();
                                setActiveMainCategory('');
                                setActiveSubCategory('');
                            }}
                        >
                            <h2>{activeSubCategory}</h2>
                        </NavLink>
                    </StyledHeader>
                    {subCategoryGroup && (
                        <NavigationMenuList
                            data={subCategoryGroup.subgroup}
                            type='submenu'
                            clickHandler={() => {}}
                            activeCategory='x'
                            useLink={true}
                            currentPath={activeMainCategory.toLowerCase() + '/' + activeSubCategory.toLowerCase()}
                        />
                    )}
                </Submenu>
            </Submenu>
        </Sidebar>
    );
}

export default NavigationMenu;
