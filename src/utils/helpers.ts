import { v4 as uuidv4 } from 'uuid';
import { monthData } from '../db/datePickerData';
import * as t from '../types';
import { UserMetadata } from '@supabase/supabase-js';

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

export function getSortedCountryCodes(countryData: t.CountryCodeData[]) {
    return Array.from(new Set(countryData.map(country => country.code.split('-')[0]))).sort((a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        return numA - numB;
    });
}

export interface DateParts {
    day: string;
    month: string;
    year: string;
}

export function parseISODateToParts(isoString: string): DateParts {
    const date = new Date(isoString);

    const day = String(date.getDate());
    const monthIndex = date.getMonth();
    const year = String(date.getFullYear());
    const month = monthData.options[monthIndex];

    return { day, month, year };
}

export function getUserMetadata(user_metadata: UserMetadata) {
    return {
        userName: user_metadata.name,
        userSurname: user_metadata.surname,
        userAddress: user_metadata.address,
        userPhoneNumber: user_metadata.phoneNumber,
        userPostCode: user_metadata.postCode,
        userDateOfBirth: user_metadata.dateOfBirth,
        userContactPreferences: user_metadata.contactPreferences,
    };
}
