import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/products';

import * as t from '../../types';

interface UseProductsProps {
    gender: t.Gender;
}

export function useProducts({ gender }: UseProductsProps) {
    const { data, error, isLoading } = useQuery<t.Product[], Error>({
        queryKey: ['products', gender],
        queryFn: () => fetchProducts({ gender }),
    });

    return { data, error, isLoading };
}
