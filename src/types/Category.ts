export const validCategories = ['clothing', 'footwear', 'accessories', 'sport'] as const;

export type Category = (typeof validCategories)[number];
