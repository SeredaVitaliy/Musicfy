import { useEffect, useState } from 'react';

export function TrackList() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
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

  if (tracks === null) {
    return (
      <div>
        <span>Загрузка...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>Треков нет</span>;
      </div>
    );
  }

  return (
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

                // setSelectedTrack(track);
              }}
            >
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        );
      })}
    </ul>
  );
}
