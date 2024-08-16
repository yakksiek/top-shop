import { IoSearchOutline } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { useSearchInputContext } from '../../contexts/SearchInputContext';
import { device } from '../../styles/breakpoints';
import { useSidebarNavigationContext } from '../../contexts/SidebarNavigationContext';

interface StyledInputSearchButtonProps {
    $isOpen: boolean;
}

const StyledInputSearchButton = styled.button<StyledInputSearchButtonProps>`
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    /* @media ${device.mobile} {
        ${({ $isOpen }) =>
        !$isOpen &&
        css`
            visibility: hidden;
        `}
    } */
`;

function InputSearchButton() {
    const { handleSearchInputOpen } = useSearchInputContext();
    const { isOpen, toggleSidebarNavigation } = useSidebarNavigationContext();

    function handleSearchbarOpen() {
        handleSearchInputOpen();
        if (isOpen) toggleSidebarNavigation();
    }

    return (
        <StyledInputSearchButton onClick={handleSearchbarOpen} $isOpen={isOpen}>
            <IoSearchOutline />
            <span className='label'>Search</span>
        </StyledInputSearchButton>
    );
}

export default InputSearchButton;
