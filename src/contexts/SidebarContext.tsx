import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface SidebarContextType {
    isOpen: boolean;
    toggleSidebar: () => void;
    activeMainCategory: string;
    setActiveMainCategory: (categoryName: string) => void;
    activeSubCategory: string;
    setActiveSubCategory: (subcategoryName: string) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

function SidebarContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMainCategory, setActiveMainCategory] = useState('');
    const [activeSubCategory, setActiveSubCategory] = useState('');
    useNoScroll(isOpen);

    function toggleSidebar() {
        setIsOpen(prevState => !prevState);
        setActiveMainCategory('');
        setActiveSubCategory('');
    }

    return (
        <SidebarContext.Provider
            value={{
                isOpen,
                toggleSidebar,
                activeMainCategory,
                setActiveMainCategory,
                activeSubCategory,
                setActiveSubCategory,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

function useSidebarContext() {
    const context = useContext(SidebarContext);

    if (!context) throw new Error('Sidebar context was used outside of Sidebar provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarContextProvider, useSidebarContext };
