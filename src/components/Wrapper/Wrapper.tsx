import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';

type WrapperType = 'wide' | 'normal' | 'narrow';

interface StyledWrapperProps {
    type: WrapperType;
}

interface WrapperProps {
    children: React.ReactNode;
    type: WrapperType;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
    margin: 0 auto;
    padding: 0 5px;
    max-width: 2400px;

    ${props =>
        props.type === 'wide' &&
        css`
            @media ${device.tablet} {
                padding: 0 1vw;
            }
        `}

    ${props =>
        props.type === 'narrow' &&
        css`
            padding: 0 10vw;
            width: 100%;
        `}
`;

function Wrapper({ children, type }: WrapperProps) {
    return <StyledWrapper type={type}>{children}</StyledWrapper>;
}

export default Wrapper;
