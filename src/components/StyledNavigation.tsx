import styled from 'styled-components';

const StyledNavigation = styled.ul`
    display: flex;

    li {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.5rem;

        svg {
            font-size: 18px;
        }

        span {
            padding-left: 0.75rem;
        }
    }
`;

export default StyledNavigation;
