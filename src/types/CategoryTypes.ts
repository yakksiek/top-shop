export const validCategories = ['clothes', 'shoes', 'accessories', 'sport'] as const;

export type CategoryTypes = (typeof validCategories)[number];
