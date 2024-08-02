import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import addProductToFavourites from './api/addProductToFavouritesAction.ts';
import deleteFavouriteAction from './api/deleteFavouriteAction.ts';
import mainPageLoader from './api/mainPageLoader.ts';
import productListLoader from './api/productListLoader.ts';
import productLoader from './api/productLoader.ts';
import AppLayout from './components/AppLayout.tsx';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext.tsx';
import { CartContextProvider } from './contexts/CartContext.tsx';
import { FavouritesContextProvider } from './contexts/FavouritesContext.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import Cart from './views/Cart.tsx';
import Favourites from './views/Favourites.tsx';
import MainPage from './views/MainPage.tsx';
import ProductDetails from './views/ProductDetails.tsx';
import ProductsList from './views/ProductsList.tsx';
import Dashboard from './views/Dashboard.tsx';

const router = createBrowserRouter([
    {
        path: '/add-to-favourites/:productId',
        action: addProductToFavourites,
    },
    {
        path: '/delete-from-favourites/:favouritesId',
        action: deleteFavouriteAction,
    },
    {
        path: '',
        element: <AppLayout />,
        // errorElement: <ErrorPage />,
        children: [
            { path: '/:gender?', element: <MainPage />, loader: mainPageLoader },
            // { index: true, element: <ProductDetails /> },
            // { path: 'products/:id', element: <ProductPage /> },
            { path: 'favourites', element: <Favourites /> },
            { path: 'cart', element: <Cart /> },
            { path: '/:gender/:category/:subcategory?', element: <ProductsList />, loader: productListLoader },
            { path: '/:gender/:category/:subcategory/:productId', element: <ProductDetails />, loader: productLoader },
            { path: '/dashboard', element: <Dashboard /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <FavouritesContextProvider>
            <CartContextProvider>
                <AuthenticationContextProvider>
                    <SidebarContextProvider>
                        <SearchInputContextProvider>
                            <RouterProvider router={router} />
                        </SearchInputContextProvider>
                    </SidebarContextProvider>
                </AuthenticationContextProvider>
            </CartContextProvider>
        </FavouritesContextProvider>
    </React.StrictMode>,
);
