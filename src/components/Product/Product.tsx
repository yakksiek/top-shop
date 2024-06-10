import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';

import * as t from '../../types';
import { BASE_URL } from '../../contants/api';
import Heading from '../Heading';

interface ProductProps {
    product: t.Product;
}

const StyledImgContainer = styled.div`
    position: relative;

    img {
        aspect-ratio: 1;
    }
`;

const StyledIconHeartWrapper = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`;

const StyledPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
`;

function Product({ product }: ProductProps) {
    console.log(`${BASE_URL}${product.photos[0]}`);

    return (
        // <Link>

        <div>
            <StyledImgContainer>
                <img src={`${BASE_URL}${product.photos[0]}`} alt={product.productName} />
                <StyledIconHeartWrapper>
                    <IoMdHeartEmpty />
                </StyledIconHeartWrapper>
            </StyledImgContainer>
            <div>
                <Heading as='h5'>{product.productName}</Heading>
                <StyledPrice>{product.pricePLN} PLN</StyledPrice>
            </div>
        </div>

        // </Link>
    );
}

export default Product;
