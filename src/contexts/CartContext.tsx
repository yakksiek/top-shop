import { ReactNode, createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import * as t from '../types';

interface CartContextType {
    cartItems: t.Product[];
    addItemToCart: (cartItem: t.Product) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useLocalStorage<t.Product[] | []>('cart_products', []);

    function addItemToCart(cartItem: t.Product) {
        const newState = [...cartItems, cartItem] as t.Product[];

        setCartItems(newState);
    }

    return <CartContext.Provider value={{ cartItems, addItemToCart }}>{children}</CartContext.Provider>;
}

function useCartContext() {
    const context = useContext(CartContext);

    if (!context) throw new Error(`Cart context was used outside of Cart provider`);

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CartContextProvider, useCartContext };
