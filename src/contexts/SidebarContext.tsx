import { ReactNode, createContext, useContext, useState } from 'react';

interface SidebarContextType {
    isOpen: boolean;
    handleOpenMenu: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

function SidebarContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenMenu() {
        setIsOpen(prevState => !prevState);
    }

    return <SidebarContext.Provider value={{ isOpen, handleOpenMenu }}>{children}</SidebarContext.Provider>;
}

function useSidebarContext() {
    const context = useContext(SidebarContext);

    if (!context) throw new Error('Sidebar context was used outside of Sidebar provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarContextProvider, useSidebarContext };
