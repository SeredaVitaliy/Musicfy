// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

import { useEffect, useState } from 'react';

// const tracks = null;
// const tracks = [
//   {
//     id: 1,
//     title: 'Musicfy Player',
//     url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
//   },
//   {
//     id: 2,
//     title: 'Musicfy soundtrack',
//     url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
//   },
// ];

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    console.log('effect');
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': '286a40d4-b830-47f5-b584-7c2fe4502a83',
      },
    })
      .then(res => res.json())
      .then(json => setTracks(json.data));
  }, []);

  useEffect(() => {
    if (!selectedTrackId) {
      return;
    }
    fetch(
      'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' +
        selectedTrackId,
      {
        headers: {
          'api-key': '286a40d4-b830-47f5-b584-7c2fe4502a83',
        },
      }
    )
      .then(res => res.json())
      .then(json => setSelectedTrack(json.data));
  }, [selectedTrackId]);

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
          setSelectedTrack(null);
        }}
      >
        Сбросить выделение
      </button>
      <div style={{ display: 'flex', gap: '30px ' }}>
        <ul>
          {tracks.map(track => {
            return (
              <li
                key={track.id}
                style={{
                  border:
                    track.id === selectedTrackId ? '1px solid orange' : '',
                }}
              >
                <div
                  onClick={() => {
                    setSelectedTrackId(track.id);

                    // setSelectedTrack(track);
                  }}
                >
                  {track.attributes.title}
                </div>
                <audio
                  src={track.attributes.attachments[0].url}
                  controls
                ></audio>
              </li>
            );
          })}
        </ul>
        <div>
          <h2>Details</h2>
          {!selectedTrack && !selectedTrackId && 'Track is not selected'}
          {!selectedTrack && selectedTrackId && 'Loading...'}
          {selectedTrack &&
            selectedTrackId &&
            selectedTrack.id !== selectedTrackId &&
            'Loading...'}
          {selectedTrack && (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
