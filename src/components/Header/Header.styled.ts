import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

interface StyledHeaderProps {
    $isOpen: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding: 1.2rem 0;
    position: relative;
    height: var(--header-height);

    @media ${device.mobile} {
        z-index: 11;
        padding: 1.2rem 0;
        background-color: var(--color-grey-0);
    }

    .logo-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;
