import { useState, useRef, useEffect } from 'react';

function useSliderScroller<T>(items: T[], visibleItemsCount: number = 1) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const scrollerRef = useRef<HTMLUListElement | null>(null);
    const isFirst = currentItemIndex === 0;
    const isLast = currentItemIndex === items.length - visibleItemsCount;

    useEffect(() => {
        if (scrollerRef.current) {
            const itemWidth = scrollerRef.current.scrollWidth / items.length;
            scrollerRef.current.scrollTo({
                left: itemWidth * currentItemIndex,
                behavior: 'smooth',
            });
        }
    }, [currentItemIndex, items.length]);

    const handlePrevious = () => {
        setCurrentItemIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };

    const handleNext = () => {
        setCurrentItemIndex(prevIndex => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };

    return { scrollerRef, currentItemIndex, handlePrevious, handleNext, isFirst, isLast };
}

export default useSliderScroller;
