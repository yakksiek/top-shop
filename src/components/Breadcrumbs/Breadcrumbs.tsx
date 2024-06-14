import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const breadcrumbs = [
    {
        categoryName: 'Women',
        path: 'women',
    },
    {
        categoryName: 'Clothes',
        path: 'clothes',
    },
    {
        categoryName: 'Sweaters',
        path: 'sweaters',
    },
];

const StyledBreadCrumbsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 0.75rem;

    span.selector {
        margin: 0 0.3rem;
    }

    li:last-child span.selector {
        display: none;
    }
`;

function Breadcrumbs() {
    return (
        <StyledBreadCrumbsList>
            {breadcrumbs.map(breadcrumbItem => (
                <li key={breadcrumbItem.path}>
                    <NavLink to={breadcrumbItem.path}>
                        {breadcrumbItem.categoryName}
                        <span className='selector'>/</span>
                    </NavLink>
                </li>
            ))}
        </StyledBreadCrumbsList>
    );
}

export default Breadcrumbs;
