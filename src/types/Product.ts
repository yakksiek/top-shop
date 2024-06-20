export interface Product {
    id: number;
    gender: string;
    category: string;
    subcategory: string;
    productName: string;
    brand: string;
    pricePLN: number;
    priceUSD: number;
    photos: string[];
    description: string;
    maintenanceInfo: string;
}

export interface LoaderProductData {
    bestsellers: Product[];
    description: string;
    maintenanceInfo: string;
    heroImageUrl: string;
}
