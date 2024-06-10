import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext.tsx';
import MainPage from './views/MainPage.tsx';
import AppLayout from './components/AppLayout.tsx';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         // element: <App />,
//         element: <MainPage />,
//     },
// ]);

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        // errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            // { path: 'products/:id', element: <ProductPage /> },
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

// https://top-shop-backend.onrender.com/products
