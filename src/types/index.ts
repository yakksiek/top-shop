import { Product, LoaderProductData } from './Product';
import { GenderTypes, validGenders } from './GenderTypes';
import { validCategories, CategoryTypes } from './CategoryTypes';
import { validSubcategories, SubcategoryTypes } from './SubcategoryTypes';
import { FavouritesList } from './FavouritesListTypes';
import User from './User';
import FilterKey from './ProductFilterKeyTypes';
import ServicesItem from './ServicesItemTypes';
import OverviewCategory from './OverviewCategoryTypes';

export type {
    Product,
    GenderTypes,
    LoaderProductData,
    CategoryTypes,
    SubcategoryTypes,
    FavouritesList,
    User,
    FilterKey,
    ServicesItem,
    OverviewCategory,
};

export { validGenders, validCategories, validSubcategories };
