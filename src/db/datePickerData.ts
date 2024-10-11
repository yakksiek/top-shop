import { SelectFieldConfig } from '../components/Select';

export const dayData: SelectFieldConfig = {
    type: 'select',
    label: 'day',
    options: Array.from({ length: 31 }, (_, i) => String(i + 1)),
    validation: { required: 'Day is required' },
};

export const monthData: SelectFieldConfig = {
    type: 'select',
    label: 'month',
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
    validation: { required: 'Month is required' },
};

export const yearData: SelectFieldConfig = {
    type: 'select',
    label: 'year',
    options: Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i)),
    validation: { required: 'Year is required' },
};
