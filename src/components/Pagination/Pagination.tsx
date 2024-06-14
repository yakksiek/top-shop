import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface PaginationProps {
    numOfPages: number;
}

const StyledPaginationList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
`;

function Pagination({ numOfPages }: PaginationProps) {
    const pages = Array(numOfPages).fill(null);

    return (
        <StyledPaginationList>
            {pages.map((_, index) => {
                return (
                    <li key={index}>
                        <NavLink>{index + 1}</NavLink>
                    </li>
                );
            })}
        </StyledPaginationList>
    );
}

export default Pagination;
