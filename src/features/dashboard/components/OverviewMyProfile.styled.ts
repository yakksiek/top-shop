import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const StyledContactServicesList = styled.ul`
    display: flex;
    border: var(--border-standard);
    margin: 1rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > * {
        flex: 1;
    }

    li {
        padding: 2rem 0.5rem 1rem;
        text-align: center;
        cursor: pointer;
        position: relative;
        border-bottom: var(--border-standard);

        &:nth-child(odd) {
            border-right: var(--border-standard);
        }

        &:nth-last-child(-n + 2) {
            border-bottom: none;
        }

        .check-mark {
            position: absolute;
            left: 65%;
            top: 15%;
            color: var(--color-red-700);
        }
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(4, 1fr);

        li {
            border: none;
            border-right: var(--border-standard);

            &:last-child {
                border: none;
            }
        }
    }
`;

export const StyledIconWrapper = styled.div`
    svg {
        font-size: 1.25rem;
    }
`;
