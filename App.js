import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videoInfo, setVideoInfo] = useState({});

  useEffect(() => {
    if (videoId) {
      fetch(`/api/video/${videoId}`)
        .then((response) => response.json())
        .then((data) => setVideoInfo(data));
    }
  }, [videoId]);

  const handleChange = (event) => {
    setVideoId(event.target.value);
  };

  return (
    <div className="app">
      <h1>heLLO! This is my  Video Player</h1>
      <input
        type="text"
        placeholder="Enter unlisted video ID"
        value={videoId}
        onChange={handleChange}
      />
      {videoInfo.title && <VideoPlayer {...videoInfo} />}
    </div>
  );
}

export default App;
