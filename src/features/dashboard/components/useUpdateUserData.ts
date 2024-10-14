import { useMutation } from '@tanstack/react-query';
import { updateUserData } from '../../../api/apiAuth';

function useUpdateUserData() {
    const { mutate: updateUser, isPending } = useMutation({
        mutationFn: updateUserData,
    });

    return { updateUser, isPending };
}

export default useUpdateUserData;
