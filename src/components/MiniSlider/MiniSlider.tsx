import styled from 'styled-components';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { BASE_URL } from '../../contants/api';
import { useEffect, useRef, useState } from 'react';

interface MiniSlidersProps {
    photos: string[];
    productName: string;
}

const StyledMediaScroller = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    &::-webkit-scrollbar {
        height: 1px;
        width: 0;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-grey-200);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-black);
    }
`;

const StyledMediaItem = styled.li`
    scroll-snap-align: start;
    height: 60vh;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const NavigationButton = styled.button`
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

    &:hover {
        background-color: var(--color-black);
        color: var(--color-grey-0);
    }

    &:first-of-type {
        left: 1rem;
    }

    &:last-of-type {
        right: 1rem;
    }
`;

function MiniSlider({ photos, productName }: MiniSlidersProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const scrollerRef = useRef<HTMLUListElement | null>(null);

    const handlePrevious = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
    };

    const handleNext = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollTo({
                left: scrollerRef.current.offsetWidth * currentPhotoIndex,
                behavior: 'smooth',
            });
        }
    }, [currentPhotoIndex]);

    return (
        <>
            <StyledMediaScroller ref={scrollerRef}>
                {photos.map(photo => (
                    <StyledMediaItem key={photo}>
                        <img src={`${BASE_URL}${photo}`} alt={productName} />
                    </StyledMediaItem>
                ))}
            </StyledMediaScroller>
            <NavigationButton onClick={handlePrevious}>
                <SlArrowLeft />
            </NavigationButton>
            <NavigationButton onClick={handleNext}>
                <SlArrowRight />
            </NavigationButton>
        </>
    );
}

export default MiniSlider;
