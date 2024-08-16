import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface SidebarNavigationContextType {
    isOpen: boolean;
    toggleSidebarNavigation: () => void;
    activeMainCategory: string;
    setActiveMainCategory: (categoryName: string) => void;
    activeSubCategory: string;
    setActiveSubCategory: (subcategoryName: string) => void;
}

const SidebarNavigationContext = createContext<SidebarNavigationContextType | null>(null);

function SidebarNavigationContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMainCategory, setActiveMainCategory] = useState('');
    const [activeSubCategory, setActiveSubCategory] = useState('');
    useNoScroll(isOpen);

    function toggleSidebarNavigation() {
        setIsOpen(prevState => !prevState);
        setActiveMainCategory('');
        setActiveSubCategory('');
    }

    return (
        <SidebarNavigationContext.Provider
            value={{
                isOpen,
                toggleSidebarNavigation,
                activeMainCategory,
                setActiveMainCategory,
                activeSubCategory,
                setActiveSubCategory,
            }}
        >
            {children}
        </SidebarNavigationContext.Provider>
    );
}

function useSidebarNavigationContext() {
    const context = useContext(SidebarNavigationContext);

    if (!context) throw new Error('Sidebar context was used outside of Sidebar provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarNavigationContextProvider, useSidebarNavigationContext };
