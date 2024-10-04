import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BASE_URL } from '../../../../constants/api';
import * as t from '../../../../types';

const StyledWishListItem = styled.div`
    p {
        font-weight: 400;
    }
`;

const StyledImgContainer = styled.div``;

interface MyWishlistPreviewItemProps {
    product: t.Product;
}

function MyWishlistPreviewItem({ product }: MyWishlistPreviewItemProps) {
    const { productName, gender, category, subcategory, id } = product;

    return (
        <li>
            <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
                <StyledWishListItem>
                    <StyledImgContainer>
                        <img src={`${BASE_URL}${product.photos[0]}`} alt={productName} />
                    </StyledImgContainer>
                    <p>{productName}</p>
                </StyledWishListItem>
            </Link>
        </li>
    );
}

export default MyWishlistPreviewItem;
