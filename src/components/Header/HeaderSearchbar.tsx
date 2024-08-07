import { useEffect, useState } from 'react';
import { Link, useFetcher, useParams } from 'react-router-dom';

import menuItems from '../../db/mainMenu.json';
import ProductPreview from '../../features/product/ProductPreview';
import { useProducts } from '../../features/product/useProducts';
import useNoScroll from '../../hooks/useNoScroll';
import * as t from '../../types';
import * as h from '../../utils/helpers';
import Heading from '../Heading';
import { SearchInput } from '../SearchInput';

import {
    StyledFlexContainer,
    StyledNavigationList,
    StyledOverlay,
    StyledProductList,
    StyledSearchbarContainer,
    StyledSearchbarWrapper,
    StyledWrapper,
} from './HeaderSearchbar.styled';

interface HeaderSearchbarProps {
    isSearchbarOpen: boolean;
    handleSearchInputOpen: () => void;
}

function HeaderSearchbar({ isSearchbarOpen, handleSearchInputOpen }: HeaderSearchbarProps) {
    const [filterQuery, setFilterQuery] = useState('');
    const fetcher = useFetcher();
    const params = useParams();
    const gender = params.gender || 'women';
    const { data: products } = useProducts({ gender });
    useNoScroll(isSearchbarOpen);

    useEffect(() => {
        if (!gender) return;
        fetcher.load(`${gender}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender]);

    useEffect(() => {}, [filterQuery]);

    const filteredProducts = products
        ? h.filterProductsByQuery(products, ['description', 'productName', 'subcategory'], filterQuery).slice(0, 4)
        : [];

    const productsToRender = fetcher.data ? (filterQuery ? filteredProducts : fetcher.data?.bestsellers) : [];

    function setQueryHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setFilterQuery(event.target.value);
    }

    return (
        <StyledSearchbarContainer $isOpen={isSearchbarOpen}>
            <StyledSearchbarWrapper>
                <SearchInput type='header' value={filterQuery} onChangeHandler={setQueryHandler} />
            </StyledSearchbarWrapper>
            <StyledFlexContainer>
                <StyledWrapper>
                    <Heading as='h2'>{gender}</Heading>
                    <nav>
                        <StyledNavigationList>
                            {menuItems.subcategories.map(subcategoryItem => {
                                return (
                                    <Link
                                        to={`${gender}/${subcategoryItem.path}`}
                                        key={subcategoryItem.path}
                                        onClick={handleSearchInputOpen}
                                    >
                                        {subcategoryItem.categoryName}
                                    </Link>
                                );
                            })}
                        </StyledNavigationList>
                    </nav>
                </StyledWrapper>
                <StyledWrapper>
                    <Heading as='h2'>Top Products</Heading>
                    {productsToRender.length > 0 ? (
                        <StyledProductList>
                            {productsToRender.map((productItem: t.Product) => (
                                <span onClick={handleSearchInputOpen} key={productItem.id}>
                                    <ProductPreview product={productItem} />
                                </span>
                            ))}
                        </StyledProductList>
                    ) : (
                        <p>
                            No products with "<strong>{filterQuery}</strong>" parameters
                        </p>
                    )}
                </StyledWrapper>
            </StyledFlexContainer>
            <StyledOverlay $isOpen={isSearchbarOpen} onClick={handleSearchInputOpen} />
        </StyledSearchbarContainer>
    );
}

export default HeaderSearchbar;
