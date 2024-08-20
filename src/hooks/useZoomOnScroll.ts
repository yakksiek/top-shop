import { RefObject, useState, useEffect } from 'react';
import { size } from '../styles/breakpoints';

interface UseZoomOnScrollProps {
    imgRef: RefObject<HTMLImageElement>;
}

function useZoomOnScroll({ imgRef }: UseZoomOnScrollProps) {
    const [scale, setScale] = useState(1);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const rect = imgRef.current.getBoundingClientRect();
                const newOffset = window.innerWidth <= parseInt(size.mobile) ? 0 : 5.5 * 16;
                setOffset(newOffset);

                const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

                if (rect.top <= offset && rect.bottom > 0) {
                    const scrollDirection = currentScrollTop > lastScrollTop ? 'up' : 'down';
                    setLastScrollTop(currentScrollTop);

                    if (scrollDirection === 'up') {
                        setScale(prevScale => Math.min(prevScale + 0.001, 1.4));
                    } else {
                        setScale(prevScale => Math.max(prevScale - 0.001, 1));
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, offset, imgRef]);

    return { scale };
}

export default useZoomOnScroll;
