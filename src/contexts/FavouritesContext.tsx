import { ReactNode, createContext, useContext, useEffect } from 'react';

import { useUser } from '../features/authentication/useUser';
import useUpdateUsersFavourites from '../features/product/useUpdateUsersFavourites';
import useLocalStorage from '../hooks/useLocalStorage';
import * as t from '../types';
import * as h from '../utils/helpers';

interface FavouritesContextType {
    favouriteItems: t.FavouritesList[];
    addItemToFavourites: (product: t.Product) => void;
    removeItemFromFavourites: (itemToRemoveId: string | number) => void;
}

const FavouritesContext = createContext<FavouritesContextType | null>(null);

function FavouritesContextProvider({ children }: { children: ReactNode }) {
    const [favouriteItems, setFavouriteItems] = useLocalStorage<t.FavouritesList[] | []>('favourites_list', []);
    const { isAuthenticated } = useUser();
    const { updateUserFavourites } = useUpdateUsersFavourites();

    useEffect(() => {
        if (isAuthenticated) {
            updateUserFavourites(favouriteItems);
        }
    }, [favouriteItems, isAuthenticated, updateUserFavourites]);

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
