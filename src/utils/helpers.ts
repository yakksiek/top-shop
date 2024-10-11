import { v4 as uuidv4 } from 'uuid';
import * as t from '../types';

export const formatCurrency = (value: number, currency: string = 'PLN') => {
    const formattedValue = new Intl.NumberFormat('en', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Math.abs(value));

    return `${value < 0 ? '-' : ''}${formattedValue} ${currency} `;
};

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

export function uniqueObjectsByProductId<T extends { productId: number | string }>(arr1: T[], arr2: T[]): T[] {
    const combinedArray = [...arr1, ...arr2];
    const uniqueArray = combinedArray.filter(
        (item, index, self) => index === self.findIndex(t => t.productId === item.productId),
    );
    return uniqueArray;
}

export function arraysAreEqual<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

export function getLastItem<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[array.length - 1] : undefined;
}

export function isValidDate(date: Date | string) {
    return Object.prototype.toString.call(date) === '[object Date]';
}
