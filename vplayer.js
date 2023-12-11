import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, title, description, thumbnail }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className="video-player">
      <ReactPlayer
        url={url}
        playing={playing}
        controls={true}
        width="100%"
        height="480px"
      />
      <div className="video-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={thumbnail} alt={title} />
      </div>
      <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default VideoPlayer;
