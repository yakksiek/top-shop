import { useState, useEffect, RefObject } from 'react';

interface UseVideoControlsProps {
    videoRef: RefObject<HTMLVideoElement>;
}

function useVideoControls({ videoRef }: UseVideoControlsProps) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.3;
        }
    }, [videoRef]);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return { isPlaying, setIsPlaying, togglePlayPause, toggleMute, isMuted };
}

export default useVideoControls;
