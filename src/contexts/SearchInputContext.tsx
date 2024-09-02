import { ReactNode, createContext, useContext, useState } from 'react';

interface SearchInputContextType {
    isOpen: boolean;
    handleSearchInputOpen: () => void;
    query: string;
    setQueryHandler: (event: string) => void;
}

const SearchInputContext = createContext<SearchInputContextType | null>(null);

function SearchInputContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    function handleSearchInputOpen() {
        setIsOpen(prevState => !prevState);
    }

    function setQueryHandler(query: string) {
        setQuery(query);
    }

    return (
        <SearchInputContext.Provider value={{ isOpen, handleSearchInputOpen, query, setQueryHandler }}>
            {children}
        </SearchInputContext.Provider>
    );
}

function useSearchInputContext() {
    const context = useContext(SearchInputContext);

    if (!context) throw new Error('SearchInput context was used outside of SearchInput provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SearchInputContextProvider, useSearchInputContext };
