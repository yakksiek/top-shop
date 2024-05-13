import { IoSearchOutline } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { useSidebarContext } from '../contexts/SidebarContext';
import StyledNavigation from './StyledNavigation';

const StyledButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    z-index: 5;
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
`;

interface StyledHamburgerProps {
    isOpen: boolean;
}

const StyledHamburger = styled.span<StyledHamburgerProps>`
    --x-width: calc(var(--hamburger-height) * 1.41421356237);

    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    width: max-content;

    &::before,
    &::after,
    & span {
        content: '';
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: #333;
        border-radius: 100vh;
        transform-origin: left center;
        transition: opacity var(--hamburger-animation-timing), width var(--hamburger-animation-timing),
            rotate var(--hamburger-animation-timing), translate var(--hamburger-animation-timing);
    }

    & span {
        ${({ isOpen }) =>
            isOpen &&
            css`
                opacity: 0;
                width: 0;
            `}
    }

    ${({ isOpen }) =>
        isOpen &&
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

function Menu() {
    const { isOpen, handleOpenMenu } = useSidebarContext();

    return (
        <StyledNavigation>
            <li>
                <StyledButton onClick={handleOpenMenu}>
                    <IconContainer>
                        <StyledHamburger isOpen={isOpen}>
                            <span></span>
                        </StyledHamburger>
                    </IconContainer>
                    <StyledLabel className='label'>
                        Close
                        <span className={`text ${isOpen ? 'text-exit' : ''}`}>Menu</span>
                        <span className={`text ${isOpen ? '' : 'text-enter'}`}>Close</span>
                    </StyledLabel>
                </StyledButton>
            </li>
            <li>
                <IoSearchOutline />
                <span className='label'>Search</span>
            </li>
        </StyledNavigation>
    );
}

export default Menu;
