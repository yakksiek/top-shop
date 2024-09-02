import { useEffect, useState } from 'react';
import { Link, useFetcher, useNavigate, useParams } from 'react-router-dom';

import menuItems from '../../db/mainMenu.json';
import ProductPreview from '../../features/product/ProductPreview';
import useNoScroll from '../../hooks/useNoScroll';
import * as t from '../../types';
import Heading from '../Heading';
import { SearchInput } from '../SearchInput';

import { useSearchInputContext } from '../../contexts/SearchInputContext';
import { useFilteredProducts } from '../../features/product/useFilteredProducts';
import Button from '../Button';
import {
    StyledContainer,
    StyledNavigationList,
    StyledOverlay,
    StyledProductList,
    StyledSearchbarWrapper,
    StyledWrapper,
} from './HeaderSearchbar.styled';

function HeaderSearchbar() {
    const [filterQuery, setFilterQuery] = useState('');
    const { isOpen, handleSearchInputOpen, query, setQueryHandler } = useSearchInputContext();
    const fetcher = useFetcher();
    const params = useParams();
    const navigate = useNavigate();
    const gender = params.gender || 'women';

    const { data: filteredProducts } = useFilteredProducts({
        query: filterQuery,
    });
    useNoScroll(isOpen);
    const showMoreProductsButton = filterQuery && filteredProducts && filteredProducts.length > 0;

    useEffect(() => {
        if (!gender) return;
        fetcher.load(`${gender}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gender]);

    const productsToRender = fetcher.data
        ? filteredProducts && filterQuery
            ? filteredProducts.slice(0, 4)
            : fetcher.data?.bestsellers.slice(0, 4)
        : [];

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilterQuery(event.target.value);
    }

    function submitHandler() {
        navigate(`/${gender}/search`, { replace: true });

        setQueryHandler(filterQuery);
        setFilterQuery('');
    }

    return (
        <>
            <StyledSearchbarWrapper $isOpen={isOpen}>
                <SearchInput
                    type='header'
                    value={filterQuery}
                    onChangeHandler={handleQueryChange}
                    closeInputHandler={() => {
                        handleSearchInputOpen();
                        setFilterQuery('');
                    }}
                    onSubmit={submitHandler}
                />
            </StyledSearchbarWrapper>
            <StyledContainer $isOpen={isOpen}>
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
                        <>
                            <StyledProductList>
                                {productsToRender.map((productItem: t.Product) => (
                                    <span onClick={handleSearchInputOpen} key={productItem.id}>
                                        <ProductPreview product={productItem} />
                                    </span>
                                ))}
                            </StyledProductList>
                            {showMoreProductsButton && (
                                <Button
                                    onClick={() => {
                                        submitHandler();
                                        handleSearchInputOpen();
                                    }}
                                >
                                    More products
                                </Button>
                            )}
                        </>
                    ) : (
                        <p>
                            No products with "<strong>{query}</strong>" parameters
                        </p>
                    )}
                </StyledWrapper>
            </StyledContainer>
            <StyledOverlay
                $isOpen={isOpen}
                onClick={() => {
                    handleSearchInputOpen();
                    setFilterQuery('');
                }}
            />
        </>
    );
}

export default HeaderSearchbar;
