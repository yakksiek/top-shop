import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function useLogout() {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: () => signOut(),
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/', { replace: true });
        },
    });

    return { logout, isPending };
}

export default useLogout;
