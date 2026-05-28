import { useMutation } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-react';
import * as t from '../../types';

function useUpdateUsersFavorites() {
    const { user } = useUser();

    const { mutate: updateUserFavorites } = useMutation({
        mutationFn: async (favoritesData: t.FavoritesList[]) => {
            if (!user) throw new Error('Not authenticated');
            return user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    favourites: favoritesData,
                },
            });
        },
    });

    return { updateUserFavorites };
}

export default useUpdateUsersFavorites;
