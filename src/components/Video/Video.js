import React from "react";
import videoList from "../../data/video-details.json";

function Video() {
    const currentVideo = videoList[0];

    return (
        <video src={currentVideo.video}>
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;
