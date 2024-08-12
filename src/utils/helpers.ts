import { v4 as uuidv4 } from 'uuid';
import * as t from '../types';

export const formatCurrency = (value: number, currency: string = 'PLN') =>
    new Intl.NumberFormat('en', { style: 'currency', currency: currency }).format(value);

export const capitalise = (name: string) => {
    return name.toUpperCase().charAt(0) + name.toLowerCase().slice(1);
};

export const generateRandomId = () => {
    return uuidv4();
};

interface ItemWithId {
    id: number | string;
}

export const findItemInArrById = <T extends ItemWithId>(itemId: number | string, arr: T[]): T | undefined => {
    return arr.find(item => item.id === itemId);
};

export const removeItemFromArrById = <T extends ItemWithId>(itemId: number | string, arr: T[]): T[] => {
    const itemInArr = findItemInArrById(itemId, arr);
    if (!itemInArr) {
        return arr;
    }

    return arr.filter(item => item.id !== itemId);
};

export function filterProductsByQuery(products: t.Product[], keys: t.FilterKey[], query: string): t.Product[] {
    return products.filter(product => keys.some(key => product[key].toLowerCase().includes(query.toLowerCase())));
}
