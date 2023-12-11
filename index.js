const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/video/:id', async (req, res) => {
  const videoId = req.params.id;
  const API_KEY = '{MY_KEY_1}';
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const video = response.data.items[0];
    const videoInfo = {
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/embed/${videoId}`,
    };
    res.json(videoInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching video details.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
