export const validCategories = ['clothing', 'footwear', 'accessories', 'sport'] as const;

export type CategoryTypes = (typeof validCategories)[number];
