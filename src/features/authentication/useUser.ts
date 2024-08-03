import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../api/apiAuth';

export function useUser() {
    const { isPending, data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
    });

    console.log(user);

    return { isPending, user, isAuthenticated: user?.role === 'authenticated' };
}
