import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface LoginModalContextType {
    isOpen: boolean;
    toggleLoginModal: () => void;
}

const LoginModalContext = createContext<LoginModalContextType | null>(null);

function LoginModalContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useNoScroll(isOpen);

    function toggleLoginModal() {
        setIsOpen(prevState => !prevState);
    }

    return <LoginModalContext.Provider value={{ toggleLoginModal, isOpen }}>{children}</LoginModalContext.Provider>;
}

function useLoginModalContext() {
    const context = useContext(LoginModalContext);

    if (!context) throw new Error('Auth context was used outside of Authentication provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LoginModalContextProvider, useLoginModalContext };
