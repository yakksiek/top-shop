export const validSubcategories = ['t-shirts', 'sweaters', 'trousers'] as const;

export type SubcategoryTypes = (typeof validSubcategories)[number];
