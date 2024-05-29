import { ReactNode, createContext, useContext, useState } from 'react';

interface SidebarContextType {
    isOpen: boolean;
    handleOpenMenu: () => void;
    category: string;
    handleOpenSubmenu: (categoryName?: string) => void;
    isSubmenuOpen: boolean;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

function SidebarContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [activeSubCategory, setActiveSubCategory] = useState('');

    function handleOpenMenu() {
        setIsOpen(prevState => !prevState);
        setCategory('');
    }

    function handleOpenSubmenu(categoryName: string = '') {
        setIsSubmenuOpen(prevState => !prevState);
        if (categoryName === category) {
            setCategory('');
        } else {
            setCategory(categoryName);
        }
    }

    return (
        <SidebarContext.Provider value={{ isOpen, handleOpenMenu, category, handleOpenSubmenu, isSubmenuOpen }}>
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
