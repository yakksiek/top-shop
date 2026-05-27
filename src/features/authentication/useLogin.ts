import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';

export function useLogin() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const [loginError, setLoginError] = useState<string | null>(null);

    const { mutate: login, isPending } = useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            if (!isLoaded) throw new Error('Authentication is still loading');
            const attempt = await signIn.create({ identifier: email, password });
            if (attempt.status !== 'complete') {
                throw new Error(`Unexpected sign-in status: ${attempt.status}`);
            }
            await setActive({ session: attempt.createdSessionId });
            return attempt;
        },
        onSuccess: () => setLoginError(null),
        onError: err => setLoginError((err as Error).message),
    });

    return { login, isPending, loginError, setLoginError };
}
