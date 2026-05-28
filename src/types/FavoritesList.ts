import { Product } from './Product';

export interface FavoritesList {
    id: number | string;
    productId: number;
    product: Product;
}
