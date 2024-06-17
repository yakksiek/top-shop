import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';
import { StyledSidebar } from './Sidebar.styled';

interface SidebarProps {
    $isOpen: boolean;
}

const StyledSubmenu = styled(StyledSidebar)<SidebarProps>`
    transform: translateX(-100%);
    top: 0;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            transform: translateX(0);
        `}

    @media ${device.tablet} {
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                left: 100%;
            `}
    }
`;

interface SubmenuProps {
    isOpen: boolean;
    children: React.ReactNode;
    slideFrom: 'left' | 'right';
}

function Submenu({ isOpen, children, slideFrom }: SubmenuProps) {
    return (
        <StyledSubmenu $isOpen={isOpen ? true : false} $slideFrom={slideFrom}>
            {children}
        </StyledSubmenu>
    );
}

export default Submenu;
