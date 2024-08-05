import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { updateUserPassword } from '../../api/apiAuth';

function useUpdateUserPassword() {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const { mutate: changePassword, isPending } = useMutation({
        mutationFn: updateUserPassword,
        onMutate: () => {
            setSuccessMessage(null);
            setErrorMessage(null);
        },
        onSuccess: () => {
            setErrorMessage(null);
            setSuccessMessage('Your password was successfully updated');
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: err => {
            setSuccessMessage(null);
            setErrorMessage(err.message);
        },
    });

    return { changePassword, isPending, errorMessage, successMessage, setErrorMessage };
}

export default useUpdateUserPassword;
