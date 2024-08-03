import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';

const FullPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type ProtectedRouteProps = PropsWithChildren;

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isPending, isAuthenticated, user } = useUser();
    const navigate = useNavigate();

    console.log('authenticated');
    console.log(user?.role === 'authenticated');

    useEffect(() => {
        if (!isAuthenticated && !isPending) {
            navigate('/');
        }
    }, [navigate, isAuthenticated, isPending]);

    if (isPending) {
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return children;
}

export default ProtectedRoute;
