import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthenticationContext';
import { useLoginModalContext } from '../contexts/LoginModalContext';

type ProtectedRouteProps = PropsWithChildren;

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = useAuth();
    const navigate = useNavigate();

    const { toggleLoginModal } = useLoginModalContext();

    useEffect(() => {
        if (user === null) {
            navigate('/', { replace: true });
        }
    }, [navigate, user, toggleLoginModal]);

    if (user === null) return null;

    return children;
}

export default ProtectedRoute;
