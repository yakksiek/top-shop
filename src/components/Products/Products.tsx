import * as t from '../../types';

import Heading from '../Heading';
import Product from '../ProductListItem';
import Section from '../Section';
import Wrapper from '../Wrapper';
import { StyledProductsWrapper } from './Products.styled';

interface ProductsProps {
    products: t.Product[];
    heading: string;
}

function Products({ products, heading }: ProductsProps) {
    if (products.length === 0) {
        return <h1>no products in this category</h1>;
    }

    return (
        <Section>
            <Wrapper type='narrow'>
                <Heading as='h2' $marginBottom={true}>
                    {heading}
                </Heading>
                <StyledProductsWrapper>
                    {products.map(product => {
                        return <Product key={product.id} product={product} />;
                    })}
                </StyledProductsWrapper>
            </Wrapper>
        </Section>
    );
}

export default Products;
