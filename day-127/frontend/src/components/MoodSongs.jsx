import React, { useState } from "react";
import './MoodSongs.css'

const MoodSongs = () => {
  const [Songs, setSongs] = useState([
    {
      title: "song_title",
      artist: "song_artist",
      url: "test_url",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "test_url",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "test_url",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "test_url",
    },
  ]);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {Songs.map((song, indx) => (
        <div key={indx}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-button">
            <i className="ri-play-circle-line"></i>
            <i className="ri-pause-circle-line"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
