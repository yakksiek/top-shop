import { InputSearchButton } from './SearchInput';
import { SidebarMenuButton } from './Sidebar';
import StyledNavigation from './StyledNavigation';

function Menu() {
    return (
        <StyledNavigation>
            <li>
                <SidebarMenuButton />
            </li>
            <li>
                <InputSearchButton />
            </li>
        </StyledNavigation>
    );
}

export default Menu;
