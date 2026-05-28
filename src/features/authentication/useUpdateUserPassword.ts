import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function useUpdateUserPassword() {
    const { user } = useUser();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { mutate: changePassword, isPending } = useMutation({
        mutationFn: async (newPassword: string) => {
            if (!user) throw new Error('Not authenticated');
            return user.updatePassword({ newPassword });
        },
        onMutate: () => {
            setSuccessMessage(null);
            setErrorMessage(null);
        },
        onSuccess: () => {
            setSuccessMessage('Your password was successfully updated');
        },
        onError: err => {
            setSuccessMessage(null);
            setErrorMessage((err as Error).message);
        },
    });

    return { changePassword, isPending, errorMessage, successMessage, setErrorMessage };
}

export default useUpdateUserPassword;
