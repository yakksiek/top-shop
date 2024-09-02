import { useRef } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import { PiSpeakerHighFill } from 'react-icons/pi';

import { BASE_URL } from '../../constants/api';
import useVideoControls from '../../hooks/useVideoControls';
import { StyledControlButton, StyledCustomControls, StyledVideoElement } from './EditorialVideo.styles';
import StickyEditorialWrapper from './StickyEditorialWrapper';

interface EditorialVideo {
    videoLink: string;
}

function EditorialVideo({ videoLink }: EditorialVideo) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isPlaying, togglePlayPause, toggleMute, isMuted } = useVideoControls({ videoRef });

    return (
        <>
            <StickyEditorialWrapper>
                <StyledVideoElement
                    ref={videoRef}
                    src={`${BASE_URL}/${videoLink}`}
                    muted={isMuted}
                    loop
                    autoPlay
                    playsInline
                />
            </StickyEditorialWrapper>
            <StyledCustomControls className='custom-controls'>
                <StyledControlButton onClick={togglePlayPause}>
                    {isPlaying ? <IoIosPause /> : <IoIosPlay />}
                </StyledControlButton>
                <StyledControlButton onClick={toggleMute}>
                    {isMuted ? <PiSpeakerHighFill /> : <FaVolumeMute />}
                </StyledControlButton>
            </StyledCustomControls>
        </>
    );
}

export default EditorialVideo;
