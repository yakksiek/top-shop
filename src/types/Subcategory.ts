import mainMenuDB from '../db/mainMenu.json';

export const validSubcategories = mainMenuDB.subcategories.flatMap(subcategory =>
    subcategory.subgroup.map(sub => sub.path),
);

export type Subcategory = (typeof validSubcategories)[number];
