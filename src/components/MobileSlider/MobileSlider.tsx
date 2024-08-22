import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSliderWrapper = styled.div`
    position: relative;
    overflow-x: hidden;
    padding-bottom: 2rem;

    div.slick-slider {
        overscroll-behavior-x: none;
    }

    .slick-dots {
        margin-top: 1rem;
        font-size: 16px;
        bottom: -16px;
    }
`;

export const StyledSliderItem = styled.div`
    li {
        list-style: none;
    }
`;

interface MobileSliderProps {
    children: React.ReactNode;
}

const MobileSlider = ({ children }: MobileSliderProps) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: false,
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };

    return (
        <StyledSliderWrapper>
            <Slider {...settings}>
                {React.Children.map(children, (child, index) => (
                    <StyledSliderItem key={index}>{child}</StyledSliderItem>
                ))}
            </Slider>
        </StyledSliderWrapper>
    );
};

export default MobileSlider;
