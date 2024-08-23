import { useQuery } from '@tanstack/react-query';
import { fetchFilteredProducts } from '../../api/apiProducts';

import * as t from '../../types';

interface UseFilteredProductsProps {
    gender: string;
    filters?: Record<string, string>;
    or?: string[];
    query: string;
}

export function useFilteredProducts({ gender, query, filters, or }: UseFilteredProductsProps) {
    const { data, error, isPending } = useQuery<t.Product[], Error>({
        queryKey: ['products', gender, filters, or],
        queryFn: () => fetchFilteredProducts({ gender, query, filters, or }),
    });

    return { data, error, isPending };
}
