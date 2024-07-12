export const formatCurrency = (value: number, currency: string = 'PLN') =>
    new Intl.NumberFormat('en', { style: 'currency', currency: currency }).format(value);

export const capitalise = (name: string) => {
    return name.toUpperCase().charAt(0) + name.toLowerCase().slice(1);
};
