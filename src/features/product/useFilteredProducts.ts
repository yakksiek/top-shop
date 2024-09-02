import { useQuery } from '@tanstack/react-query';
import { fetchFilteredProducts } from '../../api/apiProducts';

import * as t from '../../types';
import { useParams } from 'react-router-dom';

interface UseFilteredProductsProps {
    filters?: Record<string, string>;
    or?: string[];
    query: string;
}

export function useFilteredProducts({ query, filters, or }: UseFilteredProductsProps) {
    const params = useParams();
    const gender = params.gender || 'women';

    const { data, error, isPending } = useQuery<t.Product[], Error>({
        queryKey: ['filteredProducts', gender, query],
        queryFn: () => fetchFilteredProducts({ gender, query, filters, or }),
    });

    return { data, error, isPending };
}
