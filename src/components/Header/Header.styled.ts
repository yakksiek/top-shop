import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
import { HEADER_Z_INDEX } from '../../contants/z-indexes';

interface StyledHeaderProps {
    $isOpen: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    height: var(--header-height);

    @media ${device.mobile} {
        z-index: ${HEADER_Z_INDEX};
        background-color: var(--color-grey-0);
        padding: 0 5px;
    }

    @media ${device.tablet} {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        background-color: var(--color-grey-0);
        z-index: ${HEADER_Z_INDEX};
        transition: border-bottom var(--animation-and-timing);
        border-bottom: 1px solid transparent;

        &.border {
            border-bottom: var(--border-standard);
        }
    }

    .logo-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;
