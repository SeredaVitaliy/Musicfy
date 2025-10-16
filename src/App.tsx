// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// const tracks = null;
const tracks = [
  {
    id: 1,
    title: 'Musicfy Player',
    url: "music/Snow Strippers - Don't You Feel.mp3",
  },
  {
    id: 2,
    title: 'Musicfy soundtrack',
    url: 'music/Snow Strippers - Every Night.mp3',
  },
  {
    id: 3,
    title: 'Musicfy soundtrack',
    url: 'music/Snow Strippers - Every Night.mp3',
  },
  {
    id: 4,
    title: 'Musicfy soundtrack',
    url: 'music/Snow Strippers - Every Night.mp3',
  },
  {
    id: 5,
    title: 'Musicfy soundtrack',
    url: 'music/Snow Strippers - Every Night.mp3',
  },
];

const selectedTrackId = null;

export function App() {
  if (tracks === null) {
    return (
      <div>
        <h1>Musicfy Player</h1>
        <span>Загрузка...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfy Player</h1>
        <span>Треков нет</span>;
      </div>
    );
  }
  return (
    <div>
      <h1>Musicfun Player</h1>
      <ul>
        {tracks.map(track => {
          return (
            <li
              key={track.id}
              style={{
                border: track.id === selectedTrackId ? '1px solid orange' : '',
              }}
            >
              <div>{track.title}</div>
              <audio src={track.url} controls></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
