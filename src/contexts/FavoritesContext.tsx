import { ReactNode, createContext, useContext, useEffect } from 'react';

import { useUser } from '@clerk/clerk-react';
import useUpdateUsersFavorites from '../features/product/useUpdateUsersFavorites';
import useLocalStorage from '../hooks/useLocalStorage';
import * as t from '../types';
import * as h from '../utils/helpers';

interface FavoritesContextType {
    favoriteItems: t.FavoritesList[];
    addItemToFavorites: (product: t.Product) => void;
    removeItemFromFavorites: (itemToRemoveId: string | number) => void;
    handleSetFavorites: (newFavorites: t.FavoritesList[]) => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

function FavoritesContextProvider({ children }: { children: ReactNode }) {
    const [favoriteItems, setFavoriteItems] = useLocalStorage<t.FavoritesList[] | []>('favourites_list', []);
    const { isSignedIn } = useUser();
    const { updateUserFavorites } = useUpdateUsersFavorites();

    useEffect(() => {
        if (isSignedIn) {
            updateUserFavorites(favoriteItems);
        }
    }, [favoriteItems, isSignedIn, updateUserFavorites]);

    function addItemToFavorites(product: t.Product) {
        const { id: productId } = product;

        const isItemInFavorites = h.findItemInArrById(productId, favoriteItems);
        if (isItemInFavorites) return;

        const id = h.generateRandomId();
        const newFavoritesItem = { productId, id, product };

        const newState = [...favoriteItems, newFavoritesItem];

        setFavoriteItems(newState);
    }

    function removeItemFromFavorites(itemToRemoveId: string | number) {
        const itemInFavorites = h.findItemInArrById(itemToRemoveId, favoriteItems);
        if (!itemInFavorites) return;

        const newState = h.removeItemFromArrById(itemToRemoveId, favoriteItems);

        setFavoriteItems(newState);
    }

    function handleSetFavorites(newFavArr: t.FavoritesList[]) {
        const areFavoriteArraysTheSame = h.arraysAreEqual(newFavArr, favoriteItems);
        if (areFavoriteArraysTheSame) return;

        const combinedFavoritesArr = h.uniqueObjectsByProductId(newFavArr, favoriteItems);

        setFavoriteItems(combinedFavoritesArr);
    }

    return (
        <FavoritesContext.Provider
            value={{ addItemToFavorites, favoriteItems, removeItemFromFavorites, handleSetFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

function useFavoritesContext() {
    const context = useContext(FavoritesContext);

    if (!context) throw new Error('Favorites context was used outside of Favorites context provider');

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FavoritesContextProvider, useFavoritesContext };
