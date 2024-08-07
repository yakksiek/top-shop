import { Product, LoaderProductData } from './Product';
import { GenderTypes, validGenders } from './GenderTypes';
import { validCategories, CategoryTypes } from './CategoryTypes';
import { validSubcategories, SubcategoryTypes } from './SubcategoryTypes';
import { FavouritesList } from './FavouritesListTypes';
import User from './User';
import FilterKey from './ProductFilterKeyTypes';

export type {
    Product,
    GenderTypes,
    LoaderProductData,
    CategoryTypes,
    SubcategoryTypes,
    FavouritesList,
    User,
    FilterKey,
};

export { validGenders, validCategories, validSubcategories };
