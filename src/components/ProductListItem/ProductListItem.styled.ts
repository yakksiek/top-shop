import styled from 'styled-components';

export const StyledItem = styled.li`
    padding: 0.5rem;
    cursor: pointer;

    .cart-label {
        opacity: 0;
        transition: opacity 0.6s ease, right 0.3s ease;
    }

    &:hover {
        .cart-label {
            opacity: 1;
            right: 5px;
        }

        .cart-wrapper {
            width: 4rem;
            transition: width 0.4s ease;
        }
    }
`;

export const StyledImgContainer = styled.div`
    position: relative;

    img {
        aspect-ratio: 1;
        z-index: 1;
    }

    button.form {
        border: none;
        background-color: transparent;
    }
`;

export const StyledIconHeartWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.1rem;
`;

export const StyledPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButtonCart = styled.button`
    padding: 0.5rem;
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
        font-size: 0.75rem;
        position: absolute;
        right: -100%;
    }

    svg {
        font-size: 0.85rem;
    }

    &:hover {
        background-color: red;
    }
`;
