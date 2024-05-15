import styled, { css } from 'styled-components';

interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Heading = styled.h1<HeadingProps>`
    font-size: 20px;
    font-weight: 600;

    ${props =>
        props.as === 'h1' &&
        css`
            font-size: 2rem;
            letter-spacing: 2.5px;
        `}

    ${props =>
        props.as === 'h3' &&
        css`
            font-size: 2rem;
            font-weight: 500;
        `}

    ${props =>
        props.as === 'h4' &&
        css`
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
        `}

    ${props =>
        props.as === 'h5' &&
        css`
            font-size: 1.25rem;
            font-weight: 500;
            /* text-align: center; */
        `}
`;

export default Heading;
