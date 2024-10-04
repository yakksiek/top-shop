import styled, { css } from 'styled-components';
import { ArrowLeft, ArrowRight } from '../../shared/icons';

interface NavigationButtonProps {
    $endlessScroll: boolean;
    $isFirst: boolean;
    $isLast: boolean;
}

const NavigationButton = styled.button<NavigationButtonProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--color-grey-0);
    color: var(--color-black);
    border: none;
    padding: 0.75rem;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;
    aspect-ratio: 1;

    transition: opacity 0.5s ease, visibility 0.3s ease;
    opacity: 1;
    visibility: visible;

    &:hover {
        background-color: var(--color-black);
        color: var(--color-grey-0);
    }

    &:first-of-type {
        left: 1rem;
        ${({ $isFirst, $endlessScroll }) =>
            $isFirst &&
            !$endlessScroll &&
            css`
                // increase specificity due to OverviewMyWishlist.styled.ts
                // where .scroller_btn is targeted on hover
                && {
                    opacity: 0;
                    visibility: hidden;
                }
            `}
    }

    &:last-of-type {
        right: 1rem;
        ${({ $isLast, $endlessScroll }) =>
            $isLast &&
            !$endlessScroll &&
            css`
                // increase specificity due to OverviewMyWishlist.styled.ts
                // where .scroller_btn is targeted on hover
                && {
                    opacity: 0;
                    visibility: hidden;
                }
            `}
    }

    &.scroller__btn {
        opacity: 0;
        visibility: hidden;
    }
`;

interface ButtonRoundSlider {
    onClick: () => void;
    className?: boolean;
    endlessScroll?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    type: 'left' | 'right';
}

function ButtonRoundSlider({
    onClick,
    className = false,
    endlessScroll = true,
    isFirst = false,
    isLast = false,
    type = 'left',
}: ButtonRoundSlider) {
    const isLeftButton = type === 'left';
    return (
        <NavigationButton
            onClick={onClick}
            className={className ? 'scroller__btn' : ''}
            $endlessScroll={endlessScroll}
            $isFirst={isFirst}
            $isLast={isLast}
        >
            {isLeftButton ? <ArrowLeft /> : <ArrowRight />}
        </NavigationButton>
    );
}

export default ButtonRoundSlider;
