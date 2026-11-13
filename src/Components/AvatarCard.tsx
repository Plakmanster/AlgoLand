import type { CSSProperties } from 'react';

export type AvatarId = 'explorer-max' | 'tech-nova' | 'robo-cadet' | 'wizard-of-logic';

export interface AvatarOption {
  id: AvatarId;
  name: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

interface AvatarCardProps {
  avatar: AvatarOption;
  selected: boolean;
  onSelect: (id: AvatarId) => void;
}

export default function AvatarCard({ avatar, selected, onSelect }: AvatarCardProps) {
  return (
    <button
      type="button"
      className={`algoland-avatar-card${selected ? ' is-selected' : ''}`}
      style={{ '--avatar-color': avatar.color } as CSSProperties}
      aria-pressed={selected}
      onClick={() => onSelect(avatar.id)}
    >
      <img className="algoland-avatar-image" src={avatar.image} alt="" />
      <span className="algoland-avatar-symbol" aria-hidden="true">{avatar.icon}</span>
      <strong>{avatar.name}</strong>
      <span className="algoland-avatar-description">{avatar.description}</span>
      {selected && <span className="algoland-avatar-selected">✓ Επιλέχθηκε!</span>}
    </button>
  );
}
