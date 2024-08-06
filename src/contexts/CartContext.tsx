import { ReactNode, createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import * as t from '../types';

interface CartContextType {
    cartItems: t.Product[];
    addItemToCart: (cartItem: t.Product) => void;
    removeItemFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useLocalStorage<t.Product[] | []>('cart_products', []);

    function addItemToCart(newCartItem: t.Product) {
        const newState = [...cartItems, newCartItem] as t.Product[];

        setCartItems(newState);
    }

    function removeItemFromCart(id: number) {
        const newState = cartItems.filter(cartItem => cartItem.id !== id);

        setCartItems(newState);
    }

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>{children}</CartContext.Provider>
    );
}

function useCartContext() {
    const context = useContext(CartContext);

    if (!context) throw new Error(`Cart context was used outside of Cart provider`);

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CartContextProvider, useCartContext };
