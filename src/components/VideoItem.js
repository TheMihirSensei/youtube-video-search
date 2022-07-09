import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className="image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div class="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
