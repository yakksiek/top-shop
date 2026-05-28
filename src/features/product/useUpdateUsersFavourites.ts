import { useMutation } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-react';
import * as t from '../../types';

function useUpdateUsersFavourites() {
    const { user } = useUser();

    const { mutate: updateUserFavourites } = useMutation({
        mutationFn: async (favouritesData: t.FavouritesList[]) => {
            if (!user) throw new Error('Not authenticated');
            return user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    favourites: favouritesData,
                },
            });
        },
    });

    return { updateUserFavourites };
}

export default useUpdateUsersFavourites;
