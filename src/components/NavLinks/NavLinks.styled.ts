import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinkItem = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledCartIndicator = styled.div`
    color: var(--color-grey-0);
    position: absolute;
    font-size: 9px;
    top: -1px;
    right: -1px;
    transform: translate(50%, -50%);
    display: block;
    padding-left: 0;
    font-size: 0.5rem;
    font-weight: 500;
    height: 0.75rem;
    letter-spacing: 0;
    width: 0.75rem;
    background-color: var(--color-black);
    border-radius: 50%;
    text-align: center;
`;

export const StyledFavouritesIndicator = styled.div`
    position: absolute;
    top: -1px;
    right: -1px;
    height: 0.375rem;
    width: 0.375rem;
    transform: translate(50%, -50%);
    background-color: var(--color-orange-400);
    border-radius: 50%;
    display: block;
    border: 1px solid var(--color-grey-0);
`;
