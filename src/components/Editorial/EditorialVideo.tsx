import { useRef } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import { PiSpeakerHighFill } from 'react-icons/pi';

import { BASE_URL } from '../../contants/api';
import useVideoControls from '../../hooks/useVideoControls';
import {
    StyledControlButton,
    StyledCustomControls,
    StyledVideoElement,
    StyledVideoWrapper,
} from './EditorialVideo.styles';

interface EditorialVideo {
    videoLink: string;
}

function EditorialVideo({ videoLink }: EditorialVideo) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isPlaying, togglePlayPause, toggleMute, isMuted } = useVideoControls({ videoRef });

    return (
        <>
            <StyledVideoWrapper>
                <StyledVideoElement
                    ref={videoRef}
                    src={`${BASE_URL}/${videoLink}`}
                    muted={isMuted}
                    loop
                    autoPlay
                    playsInline
                />
            </StyledVideoWrapper>
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
