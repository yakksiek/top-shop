import { BASE_URL } from '../../../../constants/api';
import useSliderScroller from '../../../../hooks/useSliderScroller';
import ButtonRoundSlider from '../../../../components/ButtonRoundSlider';
import { StyledMediaItem, StyledMediaScroller } from './MiniSlider.styled';

interface MiniSlidersProps {
    photos: string[];
    productName: string;
}

function MiniSlider({ photos, productName }: MiniSlidersProps) {
    const { scrollerRef, handlePrevious, handleNext } = useSliderScroller(photos);

    return (
        <>
            <StyledMediaScroller ref={scrollerRef}>
                {photos.map(photo => (
                    <StyledMediaItem key={photo}>
                        <img src={`${BASE_URL}${photo}`} alt={productName} />
                    </StyledMediaItem>
                ))}
            </StyledMediaScroller>

            <ButtonRoundSlider onClick={handlePrevious} type='left' />
            <ButtonRoundSlider onClick={handleNext} type='right' />
        </>
    );
}

export default MiniSlider;
