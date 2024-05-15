import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <SidebarContextProvider>
            <SearchInputContextProvider>
                <RouterProvider router={router} />
            </SearchInputContextProvider>
        </SidebarContextProvider>
    </React.StrictMode>,
);
