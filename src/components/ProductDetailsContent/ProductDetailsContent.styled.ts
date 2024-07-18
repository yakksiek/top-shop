import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const StyledProductDetails = styled.div`
    padding: 1rem 6.4vw;
    font-weight: 400;
    overflow: hidden;

    @media ${device.tablet} {
        padding: 0 8vw;
        position: sticky;
        top: var(--header-height);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const StyledProductHeader = styled.header`
    .product-id {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 0.6rem;
        }

        h2 {
            font-size: 1.125rem;
            margin-bottom: 0.25rem;
            font-weight: 400;
        }

        svg {
            cursor: pointer;
        }
    }

    button.submit {
        border: none;
        background-color: transparent;
    }
`;

export const StyledProductMainContent = styled.div`
    .row {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        font-size: 0.85rem;
    }

    .row:first-of-type {
        border-bottom: var(--border-standard);
    }
`;

export const StyledProductFooter = styled.div`
    margin-top: 3rem;

    .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.85rem;
        cursor: pointer;
    }

    svg {
        font-size: 0.75rem;
    }
`;
