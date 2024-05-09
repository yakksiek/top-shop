import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles.ts';
import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
