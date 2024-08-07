import { NavLink, useSearchParams } from 'react-router-dom';
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

const StyledPageLink = styled(NavLink)<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
    background-color: ${({ $isActive }) => ($isActive ? 'black' : 'white')};
    text-decoration: none;
    border-radius: 50%;

    &:hover {
        background-color: ${({ $isActive }) => ($isActive ? 'black' : '#f0f0f0')};
    }
`;

function Pagination({ numOfPages }: PaginationProps) {
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const pages = Array(numOfPages).fill(null);

    return (
        <StyledPaginationList>
            {pages.map((_, index) => {
                const pageNum = index + 1;

                return (
                    <li key={index}>
                        <StyledPageLink $isActive={currentPage === pageNum} to={`?page=${pageNum}`}>
                            {pageNum}
                        </StyledPageLink>
                    </li>
                );
            })}
        </StyledPaginationList>
    );
}

export default Pagination;
