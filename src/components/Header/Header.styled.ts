import styled from 'styled-components';
import { HEADER_Z_INDEX } from '../../constants/z-indexes';
import { device } from '../../styles/breakpoints';

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
    z-index: ${HEADER_Z_INDEX};

    @media ${device.mobile} {
        background-color: var(--color-grey-0);
        padding: 0 5px;
    }

    @media ${device.tablet} {
        padding: 0 var(--padding-horizontal-nav-tablet);
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        background-color: var(--color-grey-0);
        transition: border-bottom var(--animation-and-timing);
        border-bottom: 1px solid transparent;

        &.border {
            border-bottom: var(--border-standard);
        }
    }

    @media ${device.desktop} {
        padding: 0 var(--padding-horizontal-nav-desktop);
    }

    .logo-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;
