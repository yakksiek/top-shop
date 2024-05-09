import { IoMdHeartEmpty } from 'react-icons/io';
import { IoBagHandleOutline, IoPersonOutline } from 'react-icons/io5';
import StyledNavigation from './StyledNavigation';
import styled from 'styled-components';

const StyledListItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledCartIndicator = styled.div`
    color: var(--color-grey-0);
    position: absolute;
    font-size: 9px;
    top: 0;
    right: 0;
    display: block;
    padding-left: 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 0.75rem;
    letter-spacing: 0;
    width: 0.75rem;
    background-color: black;
    border-radius: 50%;
    text-align: center;
`;

const StyledFavouritesIndicator = styled.div`
    position: absolute;
    top: 5px;
    right: 5px; // Adjust positioning as needed
    height: 0.375rem;
    width: 0.375rem;
    background-color: orange; // Set the color to orange
    border-radius: 50%;
    display: block;
    border: 1px solid white; // Optional: Adds a border to make the dot stand out
`;

function NavLinks() {
    return (
        <StyledNavigation>
            <li>
                <span>Contact Us</span>
            </li>
            <StyledListItem>
                <IoMdHeartEmpty />
                <StyledFavouritesIndicator />
            </StyledListItem>
            <li>
                <IoPersonOutline />
            </li>
            <StyledListItem>
                <IoBagHandleOutline />
                <StyledCartIndicator>0</StyledCartIndicator>
            </StyledListItem>
        </StyledNavigation>
    );
}

export default NavLinks;
