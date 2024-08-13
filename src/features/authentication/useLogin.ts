import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { login as loginApi } from '../../api/apiAuth';

export function useLogin() {
    const [loginError, setLoginError] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const {
        mutate: login,
        isPending,
        data: user,
    } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) => loginApi({ email, password }),
        onSuccess: data => {
            queryClient.setQueryData(['user'], data.user);
            setLoginError(null);
        },
        onError: err => {
            setLoginError(err.message);
        },
    });

    return { login, isPending, loginError, setLoginError, user: user?.user };
}
