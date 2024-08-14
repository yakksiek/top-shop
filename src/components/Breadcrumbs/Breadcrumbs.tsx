import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as h from '../../utils/helpers';
import * as t from '../../types';

const StyledBreadCrumbsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 0.75rem;

    span.selector {
        margin: 0 0.3rem;
    }

    .active {
        font-weight: 700;
        pointer-events: none;
    }
`;

function Breadcrumbs() {
    const { gender, category, subcategory, productId } = useParams();
    const product = useLoaderData() as t.Product;

    const breadcrumbs = [
        {
            categoryName: h.capitalise(gender || ''),
            path: `/${gender}`,
        },
        {
            categoryName: h.capitalise(category || ''),
            path: `/${gender}/${category}`,
        },
        {
            categoryName: h.capitalise(subcategory || ''),
            path: `/${gender}/${category}/${subcategory}`,
        },
        {
            categoryName: h.capitalise(product?.productName || ''),
            path: `/${gender}/${category}/${subcategory}/${productId}`,
        },
    ].filter(breadcrumb => breadcrumb.categoryName);

    return (
        <StyledBreadCrumbsList>
            {breadcrumbs.map((breadcrumbItem, index) => {
                return (
                    <li key={breadcrumbItem.path}>
                        <NavLink end to={breadcrumbItem.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                            {breadcrumbItem.categoryName}
                            {index < breadcrumbs.length - 1 && <span className='selector'>/</span>}
                        </NavLink>
                    </li>
                );
            })}
        </StyledBreadCrumbsList>
    );
}

export default Breadcrumbs;
