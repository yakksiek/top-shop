import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useSignIn } from '@clerk/clerk-react';

function usePasswordRecovery() {
    const { signIn, isLoaded } = useSignIn();
    const [recoveryPassError, setRecoveryPassError] = useState<string | null>(null);
    const [recoveryPassSuccessMsg, setRecoveryPassSuccessMsg] = useState<string | null>(null);

    const { mutate: recoverPassword, isPending } = useMutation({
        mutationFn: async (email: string) => {
            if (!isLoaded) throw new Error('Authentication is still loading');
            return signIn.create({
                strategy: 'reset_password_email_code',
                identifier: email,
            });
        },
        onMutate: () => {
            setRecoveryPassError(null);
            setRecoveryPassSuccessMsg(null);
        },
        onSuccess: () => {
            setRecoveryPassSuccessMsg(
                'If your email is in our database, you should receive email with a link to change your password.',
            );
        },
        onError: err => setRecoveryPassError((err as Error).message),
    });

    return { recoverPassword, isPending, recoveryPassError, recoveryPassSuccessMsg };
}

export default usePasswordRecovery;
