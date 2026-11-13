import { useState } from 'react';
import AvatarCard, { type AvatarId, type AvatarOption } from './AvatarCard';
import './AvatarSelectionScreen.css';

const avatars: AvatarOption[] = [
  { id: 'explorer-max', name: 'Explorer Max', description: 'Εξερευνά, ανακαλύπτει και δεν τα παρατά ποτέ!', image: '/assets/avatars/ExplorerMax.png', color: '#1677e8', icon: '🧭' },
  { id: 'tech-nova', name: 'Tech Nova', description: 'Δημιουργεί, λύνει προβλήματα και κάνει ιδέες πραγματικότητα!', image: '/assets/avatars/TechNova.png', color: '#9d36d9', icon: '⌘' },
  { id: 'robo-cadet', name: 'RoboCadet', description: 'Σκέφτεται λογικά, βρίσκει λύσεις και αγαπά τους αλγορίθμους!', image: '/assets/avatars/RoboCadet.png', color: '#159a64', icon: '⚙' },
  { id: 'wizard-of-logic', name: 'Wizard of Logic', description: 'Χρησιμοποιεί τη φαντασία και μετατρέπει τη λογική σε μαγεία!', image: '/assets/avatars/WizardOfLogic.png', color: '#ee7b16', icon: '★' },
];

interface AvatarSelectionScreenProps {
  studentName: string;
  onBack: () => void;
  onContinue: (avatarId: AvatarId) => void;
}

export default function AvatarSelectionScreen({ studentName, onBack, onContinue }: AvatarSelectionScreenProps) {
  const [selectedId, setSelectedId] = useState<AvatarId | null>(null);

  return (
    <main className="algoland-avatar-screen">
      <div className="algoland-avatar-scene">
        <img className="algoland-avatar-scene-image" src="/assets/avatar-selection-background.webp" alt="" aria-hidden="true" />
        <header className="algoland-avatar-header">
          <button type="button" className="algoland-avatar-back" onClick={onBack}>← Πίσω</button>
          <div className="algoland-avatar-intro">
            <p className="algoland-avatar-eyebrow">AlgoLand · Η περιπέτεια ξεκινά!</p>
            <h1>Διάλεξε τον χαρακτήρα σου!</h1>
            <p>{studentName.trim() ? `${studentName.trim()}, διάλεξε` : 'Διάλεξε'} τον ήρωα που θα σε συντροφεύει στο AlgoLand!</p>
          </div>
        </header>
        <div className="algoland-avatar-content">
          <section className="algoland-avatar-grid" aria-label="Επιλογή χαρακτήρα">
            {avatars.map(avatar => (
              <AvatarCard key={avatar.id} avatar={avatar} selected={selectedId === avatar.id} onSelect={setSelectedId} />
            ))}
          </section>
          <button type="button" className="algoland-avatar-continue" disabled={!selectedId}
            onClick={() => { if (selectedId) onContinue(selectedId); }}>
            Ξεκινάμε την περιπέτεια! →
          </button>
        </div>
      </div>
    </main>
  );
}
