import React from "react";

const VideoDetail = ({ video, onVideoSelect }) => {
  if (!video) {
    return <div>Video Loading ...</div>;
  } else {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className=" video-detail col-md-8 col-sm-10">
        <div className="embed-responsive embed-responsive-16by9 ">
          <iframe
            src=""
            frameBorder="0"
            className="embed-responsive-item"
            src={url}
            allowfullscreen
          />
        </div>
        <div className="details">
          <div>
            <h4>{video.snippet.title}</h4>
          </div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
