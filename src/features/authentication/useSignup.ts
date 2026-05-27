import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useSignUp, useClerk } from '@clerk/clerk-react';

interface SignupParams {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export function useSignup() {
    const { signUp, setActive, isLoaded } = useSignUp();
    const clerk = useClerk();
    const [signupError, setSignupError] = useState<string | null>(null);

    const { mutate: signup, isPending } = useMutation({
        mutationFn: async ({ name, surname, email, password }: SignupParams) => {
            if (!isLoaded) throw new Error('Authentication is still loading');
            const attempt = await signUp.create({
                emailAddress: email,
                password,
                firstName: name,
                lastName: surname,
            });
            if (attempt.status !== 'complete') {
                throw new Error(`Unexpected sign-up status: ${attempt.status}`);
            }
            await setActive({ session: attempt.createdSessionId });
            if (clerk.user) {
                await clerk.user.update({ unsafeMetadata: { favourites: [] } });
            }
            return attempt;
        },
        onSuccess: () => setSignupError(null),
        onError: err => setSignupError((err as Error).message),
    });

    return { signupError, signup, isPending };
}
