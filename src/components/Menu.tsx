import { IoSearchOutline } from 'react-icons/io5';
import StyledNavigation from './StyledNavigation';
import { SidebarMenuButton } from './Sidebar';
import styled from 'styled-components';

const StyledInputButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Menu() {
    return (
        <StyledNavigation>
            <li>
                <SidebarMenuButton />
            </li>
            <li>
                <StyledInputButton>
                    <IoSearchOutline />
                    <span className='label'>Search</span>
                </StyledInputButton>
            </li>
        </StyledNavigation>
    );
}

export default Menu;
