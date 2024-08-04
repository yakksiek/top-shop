import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../api/apiAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
    const [signupError, setSignupError] = useState<string | null>(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signup, isPending } = useMutation({
        mutationFn: signupApi,
        onSuccess: data => {
            queryClient.setQueryData(['user'], data.user);
            setSignupError(null);
            navigate('/dashboard', { replace: true });
        },
        onError: error => {
            setSignupError(error.message);
        },
    });

    return { signupError, signup, isPending };
}
