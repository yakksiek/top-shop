import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';
import { SidebarModal } from '../components/Sidebar';

interface SidebarContext {
    isOpen: boolean;
    openSidebarModal: (content: ReactNode) => void;
    closeSidebarModal: () => void;
}

const ModalSidebarContext = createContext<SidebarContext | null>(null);

function ModalSidebarContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<null | ReactNode>(null);
    useNoScroll(isOpen);

    function openSidebarModal(content: ReactNode) {
        setIsOpen(true);
        setContent(content);
    }

    function closeSidebarModal() {
        setIsOpen(false);
        setContent(null);
    }

    return (
        <ModalSidebarContext.Provider
            value={{
                isOpen,
                openSidebarModal,
                closeSidebarModal,
            }}
        >
            {children}
            <SidebarModal content={content} closeModal={closeSidebarModal} isOpen={isOpen} />
        </ModalSidebarContext.Provider>
    );
}

function useModalSidebarContext() {
    const context = useContext(ModalSidebarContext);

    if (!context) throw new Error('Sidebar context was used outside of Sidebar provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ModalSidebarContextProvider, useModalSidebarContext };
