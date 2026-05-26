import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from '@clerk/clerk-react';
import Spinner from './Spinner';

const FullPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type ProtectedRouteProps = PropsWithChildren;

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoaded, isSignedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn && isLoaded) {
            navigate('/');
        }
    }, [navigate, isSignedIn, isLoaded]);

    if (!isLoaded) {
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );
    }

    if (!isSignedIn) {
        return null;
    }

    return children;
}

export default ProtectedRoute;
