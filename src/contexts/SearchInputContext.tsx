import { ReactNode, createContext, useContext, useState } from 'react';

interface SearchInputContextType {
    isOpen: boolean;
    handleSearchInputOpen: () => void;
}

const SearchInputContext = createContext<SearchInputContextType | null>(null);

function SearchInputContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleSearchInputOpen() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <SearchInputContext.Provider value={{ isOpen, handleSearchInputOpen }}>{children}</SearchInputContext.Provider>
    );
}

function useSearchInputContext() {
    const context = useContext(SearchInputContext);

    if (!context) throw new Error('SearchInput context was used outside of SearchInput provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SearchInputContextProvider, useSearchInputContext };
