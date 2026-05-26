import * as t from '../types';

function getClerk() {
    if (!window.Clerk) throw new Error('Clerk not initialized');
    return window.Clerk;
}

export async function signup({ name, surname, email, password }: { name: string; surname: string; email: string; password: string }) {
    const clerk = getClerk();
    const signUp = await clerk.client.signUp.create({
        emailAddress: email,
        password,
        firstName: name,
        lastName: surname,
    });

    if (signUp.status === 'complete') {
        await clerk.setActive({ session: signUp.createdSessionId });

        if (clerk.user) {
            await clerk.user.update({
                unsafeMetadata: { favourites: [] },
            });
        }
    }

    return signUp;
}

export async function login({ email, password }: { email: string; password: string }) {
    const clerk = getClerk();
    const signIn = await clerk.client.signIn.create({
        identifier: email,
        password,
    });

    await clerk.setActive({ session: signIn.createdSessionId });
    return signIn;
}

export async function getCurrentUser() {
    const clerk = getClerk();
    return clerk.user ?? null;
}

export async function recoverPasswordWithEmail(email: string) {
    const clerk = getClerk();
    const signIn = await clerk.client.signIn.create({
        strategy: 'reset_password_email_code',
        identifier: email,
    });
    return signIn;
}

export async function updateUserPassword(newPassword: string) {
    const clerk = getClerk();
    if (!clerk.user) throw new Error('Not authenticated');
    await clerk.user.updatePassword({ newPassword });
    return clerk.user;
}

export async function updateUserFavourites(favouritesData: t.FavouritesList[]) {
    const clerk = getClerk();
    if (!clerk.user) throw new Error('Not authenticated');
    await clerk.user.update({
        unsafeMetadata: {
            ...clerk.user.unsafeMetadata,
            favourites: favouritesData,
        },
    });
    return clerk.user;
}

export async function updateUserData(userData: Record<string, unknown>) {
    const clerk = getClerk();
    if (!clerk.user) throw new Error('Not authenticated');
    await clerk.user.update({
        unsafeMetadata: {
            ...clerk.user.unsafeMetadata,
            ...userData,
        },
    });
    return clerk.user;
}

export async function logout() {
    const clerk = getClerk();
    await clerk.signOut();
}
