import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Products from '../components/Products';
import { SearchInput } from '../components/SearchInput';
import Section from '../components/Section';
import SpinnerMini from '../components/SpinnerMini';
import { useSearchInputContext } from '../contexts/SearchInputContext';
import { useFilteredProducts } from '../features/product/useFilteredProducts';

const StyledSearchWrapper = styled.div`
    margin-top: 1rem;
`;

const StyledMainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledHeaderParagraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin: 0.875rem 0;
`;

function Search() {
    const { query, setQueryHandler } = useSearchInputContext();

    const [filterQuery, setFilterQuery] = useState('');
    const { data: filteredProducts, isPending } = useFilteredProducts({
        query,
    });

    useEffect(() => {
        setFilterQuery(query);
    }, [query]);

    function handleChangeQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setFilterQuery(event.target.value);
    }

    function submitHandler() {
        setQueryHandler(filterQuery);
    }

    return (
        <Section>
            <StyledSearchWrapper>
                <SearchInput
                    value={filterQuery}
                    onChangeHandler={handleChangeQuery}
                    onSubmit={submitHandler}
                    closeInputHandler={() => {}}
                />
            </StyledSearchWrapper>
            <StyledMainContentWrapper>
                <StyledHeaderParagraph>
                    {isPending && <SpinnerMini />}
                    {query && `${filteredProducts?.length || ''} search results`}
                </StyledHeaderParagraph>

                {filteredProducts && query && <Products products={filteredProducts} />}
            </StyledMainContentWrapper>
        </Section>
    );
}

export default Search;
