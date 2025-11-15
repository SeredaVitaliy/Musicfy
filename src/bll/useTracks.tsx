import { useState, useEffect } from 'react';
import { type TrackListItemOutput, getTracks } from '../dal/api';

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    console.log('effect');

    getTracks().then(json => setTracks(json.data));
  }, []);

  return {
    tracks,
  };
}
