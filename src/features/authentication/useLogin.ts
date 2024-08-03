import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../api/apiAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function useLogin() {
    const [loginError, setLoginError] = useState<string | null>(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) => loginApi({ email, password }),
        onSuccess: data => {
            queryClient.setQueryData(['user'], data.user);
            navigate('/dashboard', { replace: true });
            setLoginError(null);
        },
        onError: err => {
            setLoginError(err.message);
        },
    });

    return { login, isPending, loginError, setLoginError };
}
