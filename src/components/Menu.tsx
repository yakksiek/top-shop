import { CiMenuBurger } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';
import StyledNavigation from './StyledNavigation';

function Menu() {
    return (
        <StyledNavigation>
            <li>
                <CiMenuBurger />
                <span>Menu</span>
            </li>
            <li>
                <IoSearchOutline />
                <span>Search</span>
            </li>
        </StyledNavigation>
    );
}

export default Menu;
