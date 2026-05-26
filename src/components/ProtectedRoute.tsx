import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '@clerk/clerk-react';
import Spinner from './Spinner';

const FullPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type ProtectedRouteProps = PropsWithChildren;

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );
    }

    if (!isSignedIn) {
        return <Navigate to='/' replace />;
    }

    return children;
}

export default ProtectedRoute;
