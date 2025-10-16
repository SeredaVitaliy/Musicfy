// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

import { useState } from 'react';

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

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  // let selectedTrackId = stateManagment[0];
  // let setSelectedTrackId = stateManagment[1];

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
      <h1>Musicfy Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
        }}
      >
        Сбросить выделение
      </button>
      <ul>
        {tracks.map(track => {
          return (
            <li
              key={track.id}
              style={{
                border: track.id === selectedTrackId ? '1px solid orange' : '',
              }}
            >
              <div
                onClick={() => {
                  setSelectedTrackId(track.id);
                }}
              >
                {track.title}
              </div>
              <audio src={track.url} controls></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
