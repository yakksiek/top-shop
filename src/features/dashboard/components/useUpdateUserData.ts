import { useMutation } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-react';

function useUpdateUserData() {
    const { user } = useUser();

    const { mutate: updateUser, isPending } = useMutation({
        mutationFn: async (userData: Record<string, unknown>) => {
            if (!user) throw new Error('Not authenticated');
            return user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    ...userData,
                },
            });
        },
    });

    return { updateUser, isPending };
}

export default useUpdateUserData;
