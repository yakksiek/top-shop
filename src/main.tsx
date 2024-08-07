import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import addProductToFavourites from './api/addProductToFavouritesAction.ts';
import deleteFavouriteAction from './api/deleteFavouriteAction.ts';
import mainPageLoader from './api/mainPageLoader.ts';
import productListLoader from './api/productListLoader.ts';
import productLoader from './api/productLoader.ts';
import AppLayout from './components/AppLayout.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { CartContextProvider } from './contexts/CartContext.tsx';
import { FavouritesContextProvider } from './contexts/FavouritesContext.tsx';
import { LoginModalContextProvider } from './contexts/LoginModalContext.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import Cart from './views/Cart.tsx';
import Dashboard from './views/Dashboard.tsx';
import Favourites from './views/Favourites.tsx';
import MainPage from './views/MainPage.tsx';
import ProductDetails from './views/ProductDetails.tsx';
import ProductsList from './views/ProductsList.tsx';
import PasswordReset from './views/PasswordReset.tsx';

const queryClient = new QueryClient();

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
            { path: 'favourites', element: <Favourites /> },
            { path: 'cart', element: <Cart /> },
            { path: '/:gender/:category/:subcategory?', element: <ProductsList />, loader: productListLoader },
            { path: '/:gender/:category/:subcategory/:productId', element: <ProductDetails />, loader: productLoader },
            {
                path: '/dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/password-reset',
                element: (
                    <ProtectedRoute>
                        <PasswordReset />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
            <LoginModalContextProvider>
                <FavouritesContextProvider>
                    <CartContextProvider>
                        <SidebarContextProvider>
                            <SearchInputContextProvider>
                                <RouterProvider router={router} />
                            </SearchInputContextProvider>
                        </SidebarContextProvider>
                    </CartContextProvider>
                </FavouritesContextProvider>
            </LoginModalContextProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
