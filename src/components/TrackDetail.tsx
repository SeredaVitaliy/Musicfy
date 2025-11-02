import { useEffect, useState } from 'react';

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const selectedTrackId = null;

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

  return (
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
  );
}
