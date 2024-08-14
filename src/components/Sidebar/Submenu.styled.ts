import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';
import { StyledSidebar } from './Sidebar.styled';

interface SidebarProps {
    $isOpen: boolean;
    $depth: number;
}

export const StyledSubmenu = styled(StyledSidebar)<SidebarProps>`
    transform: translateX(-200%);
    top: 0;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transform: translateX(0);

            // submenu scrollable on mobile
            height: calc(100dvh - var(--header-height));
            overflow-y: auto;
        `}

    @media ${device.tablet} {
        ${({ $isOpen, $depth }) =>
            $isOpen &&
            css`
                left: ${$depth * 100}%;

                //
                height: 100vh;
            `}
    }
`;

export const StyledHeader = styled.header`
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
