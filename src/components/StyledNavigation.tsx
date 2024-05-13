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

        .label {
            padding-left: 0.75rem;
        }

        &.contact {
            display: none;

            @media (min-width: 1025px) {
                display: flex;
            }
        }
    }
`;

export default StyledNavigation;
