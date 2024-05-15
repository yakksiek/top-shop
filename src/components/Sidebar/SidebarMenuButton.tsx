import styled, { css } from 'styled-components';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { useSearchInputContext } from '../../contexts/SearchInputContext';

const StyledButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    z-index: 2;
    height: 100%;
    overflow: hidden;
    min-width: 2rem;
`;

const StyledLabel = styled.span`
    color: transparent;
    position: relative;

    .text {
        position: absolute;
        color: var(--color-black);
        top: 50%;
        transform: translate(0, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease-in-out;
        transform-origin: center center;
    }

    .text-enter {
        transform: translate(0%, 150%);
    }

    .text-exit {
        transform: translate(0%, -150%);
    }
`;

const IconContainer = styled.div`
    min-width: 1.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface StyledHamburgerProps {
    $isOpen: boolean;
}

const StyledHamburger = styled.span<StyledHamburgerProps>`
    --x-width: calc(var(--hamburger-height) * 1.41421356237);
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    width: max-content;

    &::before,
    &::after,
    .span {
        content: '';
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: #333;
        border-radius: 100vh;
        transform-origin: left center;
        transition: opacity var(--animation-and-timing), width var(--animation-and-timing),
            rotate var(--animation-and-timing), translate var(--animation-and-timing);
    }
    .span {
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                opacity: 0;
                /* width: 0; */
            `}
    }

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            &::before {
                rotate: 45deg;
                width: var(--x-width);
                translate: 0 calc(var(--bar-height) / -2);
            }

            &::after {
                rotate: -45deg;
                width: var(--x-width);
                translate: 0 calc(var(--bar-height) / 2);
            }
        `}
`;

function SidebarMenuButton() {
    const { isOpen, handleOpenMenu } = useSidebarContext();
    const { isOpen: isSearchbarOpen, handleSearchInputOpen } = useSearchInputContext();

    function openMenuHandler() {
        handleOpenMenu();
        if (isSearchbarOpen) handleSearchInputOpen();
    }

    return (
        <StyledButton onClick={openMenuHandler}>
            <IconContainer>
                <StyledHamburger $isOpen={isOpen}>
                    <span className='span'></span>
                </StyledHamburger>
            </IconContainer>
            <StyledLabel className='label'>
                Close
                <span className={`text ${isOpen ? 'text-exit' : ''}`}>Menu</span>
                <span className={`text ${isOpen ? '' : 'text-enter'}`}>Close</span>
            </StyledLabel>
        </StyledButton>
    );
}

export default SidebarMenuButton;
