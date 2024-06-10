import * as t from '../../types';

import Heading from '../Heading';
import Product from '../Product';
import Section from '../Section';
import Wrapper from '../Wrapper';
import { StyledProductsWrapper } from './Bestsellers.styled';

interface BestsellersProps {
    products: t.Product[];
}

function Bestsellers({ products }: BestsellersProps) {
    return (
        <Section>
            <Wrapper type='narrow'>
                <Heading as='h2'>Check Out Our Bestsellers</Heading>
                <StyledProductsWrapper>
                    {products.map(product => {
                        return <Product key={product.id} product={product} />;
                    })}
                </StyledProductsWrapper>
            </Wrapper>
        </Section>
    );
}

export default Bestsellers;
