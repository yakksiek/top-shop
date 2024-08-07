import { Link } from 'react-router-dom';
import { BASE_URL } from '../../contants/api';
import styled from 'styled-components';

import * as t from '../../types';

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-flow: row nowrap;
`;

const StyledImgContainer = styled.div`
    height: 100%;

    img {
        height: 100px;
    }
`;

interface ProductPreviewProps {
    product: t.Product;
}

function ProductPreview({ product }: ProductPreviewProps) {
    const { productName, gender, category, subcategory, id } = product;
    return (
        <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
            <StyledItem>
                <StyledImgContainer>
                    <img src={`${BASE_URL}${product.photos[0]}`} alt={productName} />
                </StyledImgContainer>
                <p>{productName}</p>
            </StyledItem>
        </Link>
    );
}

export default ProductPreview;
