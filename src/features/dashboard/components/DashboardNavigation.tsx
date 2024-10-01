import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

import dashboardMenu from '../../../db/dashboardMenu.json';
import {
    StyledHeader,
    StyledListWrapper,
    StyledMenuButton,
    StyledMenuItemList,
    StyledNavigation,
    StyledOverlay,
} from './DashboardNavigation.styled';
import Logout from '../../../components/Logout';

function DashboardNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const renderedMenuItems = dashboardMenu.map(navItem => (
        <li key={navItem.path}>
            <NavLink
                to={navItem.path}
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
                {navItem.category}
            </NavLink>
        </li>
    ));

    return (
        <StyledNavigation>
            <StyledHeader>
                <h5>My dashboard</h5>
                <StyledMenuButton onClick={toggleMenu} $isOpen={menuOpen}>
                    Menu {<MdKeyboardArrowDown />}
                </StyledMenuButton>
            </StyledHeader>
            <StyledListWrapper $isOpen={menuOpen}>
                <StyledMenuItemList $isOpen={menuOpen}>
                    {renderedMenuItems}
                    <li>
                        <Logout />
                    </li>
                </StyledMenuItemList>
                <StyledOverlay onClick={toggleMenu} $isOpen={menuOpen} />
            </StyledListWrapper>
        </StyledNavigation>
    );
}

export default DashboardNavigation;
