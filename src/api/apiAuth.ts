import supabase from './supabase';
import * as t from '../types';

export async function signup({ name, surname, email, password }: t.User) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                surname,
            },
        },
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function login({ email, password }: { email: string; password: string }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) {
        return null;
    }

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}
