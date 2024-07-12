import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import mainPageLoader from './api/mainPageLoader.ts';
import AppLayout from './components/AppLayout.tsx';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import Cart from './views/Cart.tsx';
import Favourites from './views/Favourites.tsx';
import MainPage from './views/MainPage.tsx';
import ProductsList from './views/ProductsList.tsx';
import productListLoader from './api/productListLoader.ts';
// import ProductDetails from './views/ProductDetails.tsx';
// import { validGenders, GenderTypes } from './types/GenderTypes.ts';

const router = createBrowserRouter([
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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <AuthenticationContextProvider>
            <SidebarContextProvider>
                <SearchInputContextProvider>
                    <RouterProvider router={router} />
                </SearchInputContextProvider>
            </SidebarContextProvider>
        </AuthenticationContextProvider>
    </React.StrictMode>,
);
