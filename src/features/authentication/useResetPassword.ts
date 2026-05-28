import { useMutation } from '@tanstack/react-query';
import { useSignIn } from '@clerk/clerk-react';

function useResetPassword() {
    const { signIn, setActive, isLoaded } = useSignIn();

    return useMutation({
        mutationFn: async ({ code, password }: { code: string; password: string }) => {
            if (!isLoaded) throw new Error('Authentication is still loading');
            const attempt = await signIn.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code,
                password,
            });
            if (attempt.status !== 'complete') {
                throw new Error(`Unexpected reset status: ${attempt.status}`);
            }
            await setActive({ session: attempt.createdSessionId });
            return attempt;
        },
    });
}

export default useResetPassword;
