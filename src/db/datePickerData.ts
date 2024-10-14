export interface BasicFieldConfig {
    options: string[];
    validation: object;
}

export const dayData: BasicFieldConfig = {
    options: Array.from({ length: 31 }, (_, i) => String(i + 1)),
    validation: {},
};

export const monthData: BasicFieldConfig = {
    options: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    validation: {},
};

export const yearData: BasicFieldConfig = {
    options: Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i)),
    validation: {},
};
