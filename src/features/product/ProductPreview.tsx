import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/api';

import * as t from '../../types';

const StyledItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        flex: 1;
    }
`;

const StyledImgContainer = styled.div`
    height: 100%;

    img {
        height: 100px;
        width: 100px;
        object-fit: contain;
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
