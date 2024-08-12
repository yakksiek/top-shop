import { ReactNode, createContext, useContext } from 'react';

import * as t from '../types';
import * as h from '../utils/helpers';
import useLocalStorage from '../hooks/useLocalStorage';

interface FavouritesContextType {
    favouriteItems: t.FavouritesList[];
    addItemToFavourites: (product: t.Product) => void;
    removeItemFromFavourites: (itemToRemoveId: string | number) => void;
}

const FavouritesContext = createContext<FavouritesContextType | null>(null);

function FavouritesContextProvider({ children }: { children: ReactNode }) {
    const [favouriteItems, setFavouriteItems] = useLocalStorage<t.FavouritesList[] | []>('favourites_list', []);

    function addItemToFavourites(product: t.Product) {
        const { id: productId } = product;

        const isItemInFavourites = h.findItemInArrById(productId, favouriteItems);
        if (isItemInFavourites) return;

        const id = h.generateRandomId();
        const newFavouritesItem = { productId, id, product };

        const newState = [...favouriteItems, newFavouritesItem];

        setFavouriteItems(newState);
    }

    function removeItemFromFavourites(itemToRemoveId: string | number) {
        const itemInFavourites = h.findItemInArrById(itemToRemoveId, favouriteItems);
        if (!itemInFavourites) return;

        const newState = h.removeItemFromArrById(itemToRemoveId, favouriteItems);

        setFavouriteItems(newState);
    }

    return (
        <FavouritesContext.Provider value={{ addItemToFavourites, favouriteItems, removeItemFromFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
}

function useFavouritesContext() {
    const context = useContext(FavouritesContext);

    if (!context) throw new Error('Favourites context was used outside of Favourites context provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FavouritesContextProvider, useFavouritesContext };
