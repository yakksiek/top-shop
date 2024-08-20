import * as t from '../../types';

import Heading from '../Heading';
import ProductListItem from '../ProductListItem';
import Section from '../Section';
import { StyledProductsList } from './Products.styled';

interface ProductsProps {
    products: t.Product[];
    heading?: string;
    gapY?: boolean;
}

function Products({ products, heading, gapY = false }: ProductsProps) {
    if (products.length === 0) {
        return <h2>no products in this category</h2>;
    }

    return (
        <Section>
            {heading && (
                <Heading as='h2' $marginBottom={true}>
                    {heading}
                </Heading>
            )}
            <StyledProductsList $gapY={gapY}>
                {products.map(product => {
                    return <ProductListItem key={product.id} product={product} />;
                })}
            </StyledProductsList>
        </Section>
    );
}

export default Products;
