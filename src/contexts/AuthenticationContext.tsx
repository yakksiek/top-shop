import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface User {
    id: number | string;
    name: string;
}

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean;
};

function AuthContextProvider({ children, isSignedIn }: AuthProviderProps) {
    const [user] = useState<User | null>(isSignedIn ? { id: 1, name: 'Zenon' } : null);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) throw new Error('AuthContext was used outside of AuthContext provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContextProvider, useAuth };
