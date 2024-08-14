import { GoArrowLeft } from 'react-icons/go';
import { NavLink, useFetcher } from 'react-router-dom';

import { useEffect } from 'react';
import { useSidebarContext } from '../../contexts/SidebarContext';
import mainMenu from '../../db/mainMenu.json';
import ProductPreview from '../../features/product/ProductPreview';
import * as t from '../../types';
import { StyledSeparator } from '../Form';
import Heading from '../Heading';
import { Sidebar, Submenu } from '../Sidebar';
import { StyledBestsellersSection, StyledHeader } from './NavigationMenu.styled';
import NavigationMenuList from './NavigationMenuList';

function NavigationMenu() {
    const {
        isOpen,
        toggleSidebar,
        activeMainCategory,
        activeSubCategory,
        setActiveSubCategory,
        setActiveMainCategory,
    } = useSidebarContext();
    const fetcher = useFetcher();

    useEffect(() => {
        if (activeMainCategory && fetcher.state === 'idle') fetcher.load(`/${activeMainCategory.toLocaleLowerCase()}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeMainCategory]);

    const subCategoryGroup = mainMenu.subcategories.find(subcategory => {
        return subcategory.path === activeSubCategory.toLowerCase();
    });

    console.log(fetcher.data);

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
                {fetcher.data && (
                    <>
                        <StyledSeparator />
                        <StyledBestsellersSection>
                            <Heading as='h5'>{fetcher.data.description}</Heading>
                            <ul>
                                {fetcher.data.bestsellers.map((item: t.Product) => (
                                    <ProductPreview product={item} />
                                ))}
                            </ul>
                        </StyledBestsellersSection>
                    </>
                )}
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
