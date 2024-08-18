import { ReactNode, createContext, useContext, useState } from 'react';
import useNoScroll from '../hooks/useNoScroll';

interface LoginModalContextType {
    isOpen: boolean;
    toggleLoginModal: () => void;
    isCreateAccountView: boolean;
    toggleCreateAccountView: () => void;
    recoverPassView: boolean;
    toggleRecoverPassView: () => void;
}

const LoginModalContext = createContext<LoginModalContextType | null>(null);

function LoginModalContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCreateAccountView, setIsCreateAccountView] = useState(false);
    const [recoverPassView, setRecoverPassView] = useState(false);
    useNoScroll(isOpen);

    function toggleLoginModal() {
        setIsOpen(prevState => !prevState);
        setIsCreateAccountView(false);
        setRecoverPassView(false);
    }

    const toggleCreateAccountView = () => {
        setIsCreateAccountView(prevState => !prevState);
    };

    const toggleRecoverPassView = () => {
        setRecoverPassView(prevState => !prevState);
    };

    return (
        <LoginModalContext.Provider
            value={{
                toggleLoginModal,
                isOpen,
                isCreateAccountView,
                toggleCreateAccountView,
                recoverPassView,
                toggleRecoverPassView,
            }}
        >
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
