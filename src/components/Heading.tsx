import styled, { css } from 'styled-components';

type TextAlignType = 'center' | 'left' | 'right';

interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    variant?: 'category';
    $marginBottom?: boolean;
    $textAlign?: TextAlignType;
}

const Heading = styled.h1<HeadingProps>`
    font-size: 20px;
    text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : 'center')};
    margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? '0' : '1rem')};
    letter-spacing: 0.0625rem;
    word-break: keep-all;

    ${props =>
        props.as === 'h1' &&
        css`
            font-size: 2rem;
            letter-spacing: 2.5px;
        `}
    ${props =>
        props.as === 'h2' &&
        css`
            font-size: 2rem;
            letter-spacing: 2.5px;
        `}
        ${props =>
        props.as === 'h2' &&
        props.variant === 'category' &&
        css`
            font-size: 2rem;
            letter-spacing: 2.5px;
            /* text-align: left; */
        `}
        ${props =>
        props.as === 'h3' &&
        css`
            font-size: 1.5rem;
            font-weight: 500;
        `}
        ${props =>
        props.as === 'h4' &&
        css`
            font-size: 1.25rem;
            font-weight: 400;
        `}
        ${props =>
        props.as === 'h5' &&
        css`
            font-size: 1rem;
            font-weight: 400;
            text-align: left;
            margin-bottom: 0;
        `};
`;

export default Heading;
