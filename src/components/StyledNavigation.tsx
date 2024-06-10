import styled from 'styled-components';
import { device } from '../styles/breakpoints';

const StyledNavigation = styled.ul`
    display: flex;

    li {
        display: flex;
        align-items: center;
        font-size: var(--font-size-small);
        font-weight: 500;
        padding: 0.5rem;

        svg {
            font-size: 18px;
        }

        .label {
            padding-left: 0.75rem;
            display: inline;

            @media ${device.mobile} {
                display: none;
            }
        }

        &.contact {
            display: none;

            @media ${device.desktop} {
                display: flex;
            }
        }
    }
`;

export default StyledNavigation;
