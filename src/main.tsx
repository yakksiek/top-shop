import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from './routing/routes.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { CartContextProvider } from './contexts/CartContext.tsx';
import { FavouritesContextProvider } from './contexts/FavouritesContext.tsx';
import { LoginModalContextProvider } from './contexts/LoginModalContext.tsx';
import { ModalSidebarContextProvider } from './contexts/ModalSidebarContext.tsx';
import { SearchInputContextProvider } from './contexts/SearchInputContext.tsx';
import { SidebarNavigationContextProvider } from './contexts/SidebarNavigationContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
            <ModalSidebarContextProvider>
                <LoginModalContextProvider>
                    <FavouritesContextProvider>
                        <CartContextProvider>
                            <SidebarNavigationContextProvider>
                                <SearchInputContextProvider>
                                    <RouterProvider router={router} />
                                </SearchInputContextProvider>
                            </SidebarNavigationContextProvider>
                        </CartContextProvider>
                    </FavouritesContextProvider>
                </LoginModalContextProvider>
            </ModalSidebarContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
);
