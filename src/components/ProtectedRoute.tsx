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
    const { isPending, isAuthenticated } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('isPending');
        console.log(isPending);
        console.log('isAuthenticated');
        console.log(isAuthenticated);
        if (!isPending && !isAuthenticated) navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isPending]);

    if (isPending)
        return (
            <FullPage>
                <Spinner />
            </FullPage>
        );

    if (isAuthenticated) return children;

    return null;
}

export default ProtectedRoute;
