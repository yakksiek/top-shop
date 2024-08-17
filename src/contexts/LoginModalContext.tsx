import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface LoginModalContextType {
    isOpen: boolean;
    toggleLoginModal: () => void;
    isCreateAccountView: boolean;
    toggleCreateAccountView: () => void;
}

const LoginModalContext = createContext<LoginModalContextType | null>(null);

function LoginModalContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCreateAccountView, setIsCreateAccountView] = useState(false);
    useNoScroll(isOpen);

    function toggleLoginModal() {
        setIsOpen(prevState => !prevState);
    }

    const toggleCreateAccountView = () => {
        setIsCreateAccountView(prevState => !prevState);
    };

    return (
        <LoginModalContext.Provider value={{ toggleLoginModal, isOpen, isCreateAccountView, toggleCreateAccountView }}>
            {children}
        </LoginModalContext.Provider>
    );
}

function useLoginModalContext() {
    const context = useContext(LoginModalContext);

    if (!context) throw new Error('LoginModalContext context was used outside of LoginModal provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LoginModalContextProvider, useLoginModalContext };
