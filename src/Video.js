import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src="http://techslides.com/demos/sample-videos/small.ogv"
            >

            </video>
            <VideoFooter />
            {/* video sidebar */}
        </div>
    )
}

export default Video