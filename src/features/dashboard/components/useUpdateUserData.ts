import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserData } from '../../../api/apiAuth';

function useUpdateUserData() {
    const queryClient = useQueryClient();
    const { mutate: updateUser, isPending } = useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });

    return { updateUser, isPending };
}

export default useUpdateUserData;
