import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface AuthenticationContextType {
    isOpen: boolean;
    toggleLoginModal: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

function AuthenticationContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useNoScroll(isOpen);

    function toggleLoginModal() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <AuthenticationContext.Provider value={{ toggleLoginModal, isOpen }}>{children}</AuthenticationContext.Provider>
    );
}

function useAuthenticationContext() {
    const context = useContext(AuthenticationContext);

    if (!context) throw new Error('Auth context was used outside of Authentication provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthenticationContextProvider, useAuthenticationContext };
