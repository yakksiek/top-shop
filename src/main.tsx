import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SidebarContextProvider } from './contexts/SidebarContext.tsx';
import AppLayout from './components/AppLayout.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <SidebarContextProvider>
            <RouterProvider router={router} />
        </SidebarContextProvider>
    </React.StrictMode>,
);
