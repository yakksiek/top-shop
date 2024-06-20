export const validGenders = ['women', 'men', 'children'] as const;

export type GenderTypes = (typeof validGenders)[number];
