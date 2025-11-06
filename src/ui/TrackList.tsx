import { useEffect, useState } from 'react';
import { TrackItem } from './TrackItem';
import { getTracks, type TrackListItemOutput } from '../dal/api';

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TrackList({ selectedTrackId, onTrackSelect }: Props) {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    console.log('effect');

    getTracks().then(json => setTracks(json.data));
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

  const handleResetClick = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleResetClick}>reset</button>
      <hr />
      <ul>
        {tracks.map(track => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
