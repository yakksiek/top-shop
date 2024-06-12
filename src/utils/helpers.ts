export const formatCurrency = (value: number, currency: string = 'PLN') =>
    new Intl.NumberFormat('en', { style: 'currency', currency: currency }).format(value);
