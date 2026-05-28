import { useMutation } from '@tanstack/react-query';
import { useSignIn } from '@clerk/clerk-react';

function useRequestPasswordReset() {
    const { signIn, isLoaded } = useSignIn();

    return useMutation({
        mutationFn: async (email: string) => {
            if (!isLoaded) throw new Error('Authentication is still loading');
            return signIn.create({
                strategy: 'reset_password_email_code',
                identifier: email,
            });
        },
    });
}

export default useRequestPasswordReset;
