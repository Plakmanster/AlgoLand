import { motion } from "framer-motion";
import { ArrowLeft, Castle } from "lucide-react";
import type { AvatarId } from "./AvatarCard";
import "./HomeScreen.css";

type Props = {
  onStart: () => void;
  onTheory: () => void;
  onActivity: () => void;
  onQuiz: () => void;
  onCertificate: () => void;
  studentName: string;
  onNameChange: (value: string) => void;
  avatarId?: AvatarId | null;
  onBack?: () => void;
};

const avatars: Record<AvatarId, { name: string; image: string }> = {
  "explorer-max": { name: "Explorer Max", image: "/assets/avatars/ExplorerMax.png" },
  "tech-nova": { name: "Tech Nova", image: "/assets/avatars/TechNova.png" },
  "robo-cadet": { name: "RoboCadet", image: "/assets/avatars/RoboCadet.png" },
  "wizard-of-logic": { name: "Wizard of Logic", image: "/assets/avatars/WizardOfLogic.png" },
};

export default function HomeScreen(props: Props) {
  const avatar = props.avatarId ? avatars[props.avatarId] : null;
  const gates = [
    { key: "library", title: "Μαγική Βιβλιοθήκη", subtitle: "Θεωρία", onClick: props.onTheory },
    { key: "workshop", title: "Εργαστήριο Γρίφων", subtitle: "Δραστηριότητες", onClick: props.onActivity },
    { key: "quiz", title: "Αίθουσα Δοκιμασιών", subtitle: "Quiz", onClick: props.onQuiz },
    { key: "awards", title: "Αίθουσα Επιτευγμάτων", subtitle: "Αποτελέσματα", onClick: props.onCertificate },
  ] as const;
  return (
    <main className="castle-courtyard">
      <div className="castle-courtyard-scene">
        <div className="castle-courtyard-greeting" aria-live="polite">
          <strong>Καλώς ήρθες{props.studentName.trim() ? `, ${props.studentName.trim()}` : ""}!</strong>
          <span>Διάλεξε μια μαγική πύλη για την επόμενη περιπέτειά σου.</span>
        </div>
        <nav className="castle-courtyard-gates" aria-label="Οι αίθουσες του Κάστρου της Γνώσης">
          {gates.map(({ key, title, subtitle, onClick }) => (
            <motion.button key={key} type="button"
              className={`castle-courtyard-gate castle-courtyard-gate--${key}`}
              onClick={onClick} whileHover={{ y: -5, scale: 1.035 }} whileTap={{ scale: .97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              aria-label={`${title} — ${subtitle}`}>
              <img className="castle-courtyard-gate-art" src={`/assets/courtyard-portal-${key}.webp`} alt="" aria-hidden="true" />
            </motion.button>
          ))}
        </nav>
        <div className="castle-courtyard-companions">
          <div className="castle-courtyard-companion castle-courtyard-companion--bot">
            <img src="/assets/AlgoBot.png" alt="AlgoBot" />
            <p><strong>AlgoBot</strong>Ποια πύλη θα εξερευνήσουμε σήμερα;</p>
          </div>
          {avatar && <div className="castle-courtyard-companion castle-courtyard-companion--avatar">
            <img src={avatar.image} alt={avatar.name} />
            <p><strong>{avatar.name}</strong>Είμαι έτοιμος για περιπέτεια!</p>
          </div>}
        </div>
        <nav className="castle-courtyard-bottom-nav" aria-label="Πλοήγηση Μαγικής Αυλής">
        <button type="button" onClick={props.onBack ?? props.onStart}>
          <ArrowLeft size={19} aria-hidden="true" /> Πίσω στην επιλογή ήρωα
        </button>
        <span className="castle-courtyard-nav-location" aria-current="page"><Castle size={19} aria-hidden="true" /> Μαγική Αυλή</span>
        </nav>
      </div>
    </main>
  );
}
