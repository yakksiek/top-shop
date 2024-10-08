import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints';

export const StyledItem = styled.li`
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .cart-label {
        opacity: 0;
        transition: opacity 0.6s ease, right 0.3s ease;
    }

    @media ${device.mobile} {
        .cart-wrapper.animate {
            width: 4.25rem;
            transition: width 0.4s ease;
            .cart-label {
                opacity: 1;
                right: 5px;
            }
        }
    }

    @media ${device.tablet} {
        .cart-wrapper:hover {
            width: 4.25rem;
            transition: width 0.4s ease;
            .cart-label {
                opacity: 1;
                right: 5px;
            }
        }
    }

    @media ${device.desktop} {
        .cross-icon {
            transition: opacity 0.5s ease, visibility 0.3s ease;
            opacity: 0;
            visibility: hidden;
        }

        &:hover {
            .cross-icon {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;

export const StyledImgContainer = styled.div`
    position: relative;
    flex-grow: 1;

    img {
        z-index: 1;
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

    button.form {
        border: none;
        background-color: transparent;
    }
`;

export const StyledIconWrapper = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 1.1rem;
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

export const StyledLabel = styled.div`
    line-height: 1.25;

    h4 {
        font-size: 0.85rem;
        font-weight: 400;
    }

    p {
        font-size: 0.8rem;
    }
`;

export const StyledButtonCart = styled.button`
    padding: 0.5rem;
    right: 0.25rem;
    border-radius: 100vw;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color-black);
    transition: width 0.4s ease;
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: 5px;

    position: relative;
    overflow: hidden;

    span {
        font-size: 0.65rem;
        position: absolute;
        right: -100%;
    }

    svg {
        font-size: 0.85rem;
    }
`;
