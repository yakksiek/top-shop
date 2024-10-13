import { SelectFieldConfig } from '../components/Select';

export const dayData: SelectFieldConfig = {
    options: Array.from({ length: 31 }, (_, i) => String(i + 1)),
};

export const monthData: SelectFieldConfig = {
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
};

export const yearData: SelectFieldConfig = {
    options: Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i)),
};
