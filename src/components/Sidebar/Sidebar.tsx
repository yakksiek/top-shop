import React from 'react';
import { StyledOverlay, StyledSidebar } from './Sidebar.styled';

interface SidebarProps {
    toggleSidebarNavigation: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    slideFrom: 'left' | 'right';
}

function Sidebar({ toggleSidebarNavigation, isOpen, children, slideFrom }: SidebarProps) {
    return (
        <>
            <StyledOverlay onClick={toggleSidebarNavigation} $isOpen={isOpen} />
            <StyledSidebar $isOpen={isOpen} $slideFrom={slideFrom}>
                {children}
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
