import * as t from '../../types';
import ProductListItem from '../../features/product/components/ProductListItem';
import { StyledProductsList } from '../../features/product/components/Products/Products.styled';
import Heading from '../Heading';
import Section from '../Section';

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
