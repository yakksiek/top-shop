import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { recoverPasswordWithEmail as recoverPasswordWithEmailApi } from '../../api/apiAuth';

function usePasswordRecovery() {
    const [recoveryPassError, setRecoveryPassError] = useState<string | null>(null);
    const [recoveryPassSuccessMsg, setRecoveryPassSuccessMsg] = useState(<string | null>null);

    const { mutate: recoverPassword, isPending } = useMutation({
        mutationFn: (email: string) => recoverPasswordWithEmailApi(email),
        onMutate: () => {
            setRecoveryPassError(null);
            setRecoveryPassSuccessMsg(null);
        },
        onSuccess: () => {
            setRecoveryPassSuccessMsg(
                'If your email is in our database, you should receive email with a link to change your password.',
            );
        },
        onError: err => {
            setRecoveryPassError(err.message);
        },
    });

    return { recoverPassword, isPending, recoveryPassError, recoveryPassSuccessMsg };
}

export default usePasswordRecovery;
