import { useParams } from 'react-router-dom';
import Products from '../components/Products';
import { useFilteredProducts } from '../features/product/useFilteredProducts';

function Search() {
    const params = useParams();
    const gender = params.gender || 'women';
    const query = 't';
    const { data: filteredProducts, isPending } = useFilteredProducts({
        gender: gender,
        query: query,
    });

    if (isPending) {
        return <p>fetching data...</p>;
    }

    return <div>{filteredProducts && <Products products={filteredProducts} heading='Your filtered products' />}</div>;
}

export default Search;
