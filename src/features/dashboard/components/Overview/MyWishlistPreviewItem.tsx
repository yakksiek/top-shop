import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BASE_URL } from '../../../../constants/api';
import * as t from '../../../../types';

const StyledListItem = styled.li`
    scroll-snap-align: start;
`;

const StyledWishListItem = styled.div`
    p {
        font-weight: 400;
    }
`;

interface MyWishlistPreviewItemProps {
    product: t.Product;
}

function MyWishlistPreviewItem({ product }: MyWishlistPreviewItemProps) {
    const { productName, gender, category, subcategory, id } = product;

    return (
        <StyledListItem>
            <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
                <StyledWishListItem>
                    <img src={`${BASE_URL}${product.photos[0]}`} alt={productName} />
                    <p>{productName}</p>
                </StyledWishListItem>
            </Link>
        </StyledListItem>
    );
}

export default MyWishlistPreviewItem;
