import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserFavourites as updateUserFavouritesApi } from '../../api/apiAuth';

function useUpdateUsersFavourites() {
    const queryClient = useQueryClient();

    const { mutate: updateUserFavourites } = useMutation({
        mutationFn: updateUserFavouritesApi,
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ['user'] });
        },
    });

    return { updateUserFavourites };
}

export default useUpdateUsersFavourites;
