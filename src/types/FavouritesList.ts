import { Product } from './Product';

export interface FavouritesList {
    id: number | string;
    productId: number;
    product: Product;
}
