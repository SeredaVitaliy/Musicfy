import { useState, useEffect } from 'react';
import { type GetTrackDetailsOutputData, getTrack } from '../dal/api';

export function useTracksDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDetailsOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }
    getTrack(trackId).then(json => setTrackDetails(json.data));
  }, [trackId]);
  return { trackDetails };
}
