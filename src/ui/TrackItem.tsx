import clsx from 'clsx';
import type { TrackListItemOutput } from '../dal/api';
import styles from './TrackList.module.css';

type Props = {
  onSelect: (trackId: string) => void;
  track: TrackListItemOutput;
  isSelected: boolean;
};

export function TrackItem({ onSelect, track, isSelected }: Props) {
  const handleClick = () => onSelect?.(track.id);

  const obj = {
    [styles.track]: true,
    [styles.selected]: isSelected,
  };

  const className = clsx(obj);

  return (
    <li className={className} key={track.id}>
      <div onClick={handleClick}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
