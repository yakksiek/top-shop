import { createBrowserRouter, Navigate } from 'react-router-dom';
import mainPageLoader from '../api/mainPageLoader';
import productListLoader from '../api/productListLoader';
import productLoader from '../api/productLoader';
import AppLayout from '../components/AppLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Cart from '../views/Cart';
import Dashboard from '../views/Dashboard/Dashboard';
import MyProfile from '../views/Dashboard/MyProfile';
import Overview from '../views/Dashboard/Overview';
import ErrorPage from '../views/ErrorPage';
import Favourites from '../views/Favourites';
import MainPage from '../views/MainPage';
import PasswordReset from '../views/PasswordReset';
import ProductDetails from '../views/ProductDetails';
import ProductsList from '../views/ProductsList';
import Search from '../views/Search';
import MyOrders from '../views/Dashboard/MyOrders';
import MyWishlist from '../views/Dashboard/MyWishlist';

export const router = createBrowserRouter([
    {
        path: '',
        errorElement: <ErrorPage />,
        element: <AppLayout />,
        children: [
            { path: '/:gender?', element: <MainPage />, loader: mainPageLoader },
            { path: '/favourites', element: <Favourites /> },
            { path: '/cart', element: <Cart /> },
            { path: '/:gender/search', element: <Search /> },
            { path: '/:gender/:category/:subcategory?', element: <ProductsList />, loader: productListLoader },
            { path: '/:gender/:category/:subcategory/:productId', element: <ProductDetails />, loader: productLoader },
            {
                path: '/dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
                children: [
                    { path: '', element: <Navigate to='overview' replace /> },
                    { path: 'overview', element: <Overview /> },
                    { path: 'profile', element: <MyProfile /> },
                    { path: 'orders', element: <MyOrders /> },
                    { path: 'wishlist', element: <MyWishlist /> },
                ],
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
