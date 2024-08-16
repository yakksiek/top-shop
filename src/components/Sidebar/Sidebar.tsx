import React from 'react';
import { StyledOverlay, StyledSidebar } from './Sidebar.styled';

interface SidebarProps {
    toggleSidebar: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    slideFrom: 'left' | 'right';
}

function Sidebar({ toggleSidebar, isOpen, children, slideFrom }: SidebarProps) {
    return (
        <>
            <StyledOverlay onClick={toggleSidebar} $isOpen={isOpen}></StyledOverlay>
            <StyledSidebar $isOpen={isOpen} $slideFrom={slideFrom}>
                {children}
            </StyledSidebar>
        </>
    );
}

export default Sidebar;
