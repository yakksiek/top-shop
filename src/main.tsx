import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
