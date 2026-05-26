export const validGenders = ['women', 'men', 'children'] as const;

export type Gender = (typeof validGenders)[number];
