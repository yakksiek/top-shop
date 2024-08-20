import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

const StickyEditorialWrapper = styled.div`
    z-index: -1;
    position: sticky;
    top: 0;
    width: auto;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
    }

    @media ${device.mobile} {
        height: 85vh;
        overflow-x: hidden;

        img {
            object-fit: cover;
        }
    }

    @media ${device.tablet} {
        top: var(--header-height);
        width: 100%;
        height: auto;
    }
`;

export default StickyEditorialWrapper;
