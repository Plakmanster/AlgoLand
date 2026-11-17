import { useState } from "react";
import {
  DndContext, closestCenter, KeyboardSensor, MouseSensor, TouchSensor,
  useSensor, useSensors, type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove, SortableContext, sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { AvatarId } from "./AvatarCard";
import SortableItem from "./SortableItem";
import "./ActivityScreen.css";

type Mission = {
  title: string;
  icon: string;
  description: string;
  steps: string[];
  scrambled: string[];
  success: string;
  hint: string;
};

const missions: Mission[] = [
  {
    title: "Το Μαγικό Λουλούδι", icon: "🌱",
    description: "Βοήθησε έναν μαγικό σπόρο να ανθίσει!",
    steps: ["Γεμίζω τη γλάστρα με χώμα", "Βάζω τον σπόρο στο χώμα", "Ποτίζω τη γλάστρα", "Τοποθετώ τη γλάστρα στο φως"],
    scrambled: ["Ποτίζω τη γλάστρα", "Βάζω τον σπόρο στο χώμα", "Γεμίζω τη γλάστρα με χώμα", "Τοποθετώ τη γλάστρα στο φως"],
    success: "Το μαγικό λουλούδι άνθισε! 🌸",
    hint: "Πρώτα βάζουμε χώμα και τον σπόρο, έπειτα ποτίζουμε και τέλος αφήνουμε τη γλάστρα στο φως.",
  },
  {
    title: "Το Φίλτρο της Σοφίας", icon: "🧪",
    description: "Φτιάξε το λαμπερό φίλτρο του AlgoBot!",
    steps: ["Γεμίζω το καζάνι με μαγικό νερό", "Προσθέτω τρεις φωτεινούς κρυστάλλους", "Ανακατεύω με το μαγικό κουτάλι", "Λέω τη μαγική λέξη"],
    scrambled: ["Λέω τη μαγική λέξη", "Ανακατεύω με το μαγικό κουτάλι", "Γεμίζω το καζάνι με μαγικό νερό", "Προσθέτω τρεις φωτεινούς κρυστάλλους"],
    success: "Το φίλτρο λάμπει από σοφία! ✨",
    hint: "Πρώτα μπαίνει το νερό στο καζάνι και μετά τα υλικά.",
  },
  {
    title: "Το Μονοπάτι του Θησαυρού", icon: "🗝️",
    description: "Οδήγησε τον ήρωά σου στο μαγικό σεντούκι!",
    steps: ["Ξεκινώ από την πύλη του δάσους", "Προχωρώ ως το πέτρινο γεφύρι", "Περνώ προσεκτικά το γεφύρι", "Ακολουθώ τα χρυσά αστέρια", "Ανοίγω το σεντούκι με το κλειδί"],
    scrambled: ["Ακολουθώ τα χρυσά αστέρια", "Ξεκινώ από την πύλη του δάσους", "Ανοίγω το σεντούκι με το κλειδί", "Περνώ προσεκτικά το γεφύρι", "Προχωρώ ως το πέτρινο γεφύρι"],
    success: "Το σεντούκι άνοιξε! Βρήκες τον θησαυρό! 🏆",
    hint: "Πρέπει να φτάσεις στο γεφύρι πριν το περάσεις. Το σεντούκι ανοίγει τελευταίο.",
  },
];

const avatars: Record<AvatarId, { name: string; image: string }> = {
  "explorer-max": { name: "Explorer Max", image: "/assets/avatars/ExplorerMax.png" },
  "tech-nova": { name: "Tech Nova", image: "/assets/avatars/TechNova.png" },
  "robo-cadet": { name: "RoboCadet", image: "/assets/avatars/RoboCadet.png" },
  "wizard-of-logic": { name: "Wizard of Logic", image: "/assets/avatars/WizardOfLogic.png" },
};

type Props = {
  avatarId?: AvatarId | null;
  onBack: () => void;
  onComplete: () => void;
};

export default function ActivityScreen({ avatarId, onBack, onComplete }: Props) {
  const [missionIndex, setMissionIndex] = useState(0);
  const [orders, setOrders] = useState<string[][]>(() => missions.map((mission) => [...mission.scrambled]));
  const [solved, setSolved] = useState<boolean[]>([false, false, false]);
  const [feedback, setFeedback] = useState<"idle" | "wrong" | "correct">("idle");
  const [showHint, setShowHint] = useState(false);
  const [rewardAcknowledged, setRewardAcknowledged] = useState<boolean[]>([false, false, false]);

  const mission = missions[missionIndex];
  const steps = orders[missionIndex];
  const avatar = avatarId ? avatars[avatarId] : null;
  const stepIcons: Record<string, string> = {
    "Γεμίζω τη γλάστρα με χώμα": "🪴",
    "Βάζω τον σπόρο στο χώμα": "🌰",
    "Ποτίζω τη γλάστρα": "🚿",
    "Τοποθετώ τη γλάστρα στο φως": "☀️",
    "Γεμίζω το καζάνι με μαγικό νερό": "💧",
    "Προσθέτω τρεις φωτεινούς κρυστάλλους": "💎",
    "Ανακατεύω με το μαγικό κουτάλι": "🥄",
    "Λέω τη μαγική λέξη": "✨",
    "Ξεκινώ από την πύλη του δάσους": "🏰",
    "Προχωρώ ως το πέτρινο γεφύρι": "🌉",
    "Περνώ προσεκτικά το γεφύρι": "👣",
    "Ακολουθώ τα χρυσά αστέρια": "⭐",
    "Ανοίγω το σεντούκι με το κλειδί": "🗝️",
  };

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function reorder(next: string[]) {
    if (solved[missionIndex]) return;
    setOrders((previous) => previous.map((order, index) => index === missionIndex ? next : order));
    setFeedback("idle");
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id || solved[missionIndex]) return;
    const from = steps.indexOf(String(active.id));
    const to = steps.indexOf(String(over.id));
    if (from !== -1 && to !== -1) reorder(arrayMove(steps, from, to));
  }

  function check() {
    if (steps.every((step, index) => step === mission.steps[index])) {
      setSolved((previous) => previous.map((value, index) => index === missionIndex ? true : value));
      setFeedback("correct");
      setShowHint(false);
    } else {
      setFeedback("wrong");
    }
  }

  function goTo(index: number) {
    setMissionIndex(index);
    setFeedback(solved[index] ? "correct" : "idle");
    setShowHint(false);
  }

  return (
    <main className="workshop">
      <div className="workshop__room">
        <header className="workshop__header">
          <button className="workshop__back" type="button" onClick={onBack}>← Μαγική Αυλή</button>
          <div className="workshop__heading">
            <span className="workshop__eyebrow">Κάστρο της Γνώσης</span>
            <h1>⚙️ Εργαστήριο Γρίφων</h1>
          </div>
          <div className="workshop__stars" aria-label={`${solved.filter(Boolean).length} από 3 αποστολές`}>
            {"⭐".repeat(solved.filter(Boolean).length)}{"☆".repeat(3 - solved.filter(Boolean).length)}
          </div>
        </header>

        <div className="workshop__layout">
          <aside className="workshop__companions" aria-label="Οι βοηθοί σου">
            <div className="workshop__companion">
              <img src="/assets/AlgoBot.png" alt="AlgoBot" />
              <p><strong>AlgoBot</strong>Βάλε τις εντολές στη σωστή σειρά!</p>
            </div>
            {avatar && <div className="workshop__companion">
              <img src={avatar.image} alt={avatar.name} />
              <p><strong>{avatar.name}</strong>Μαζί θα τα καταφέρουμε!</p>
            </div>}
          </aside>

          <section className="workshop__bench" aria-label="Πάγκος μαγικών αποστολών">
            <nav className="workshop__missions" aria-label="Οι τρεις αποστολές">
              {missions.map((item, index) => {
                const locked = index > 0 && !solved[index - 1];
                return (
                  <button key={item.title} type="button" disabled={locked}
                    className={`workshop__mission-tab ${index === missionIndex ? "is-active" : ""}`}
                    aria-current={index === missionIndex ? "step" : undefined}
                    onClick={() => goTo(index)}>
                    <span className="workshop__tab-icon">{solved[index] ? "⭐" : item.icon}</span>
                    <span className="workshop__tab-copy"><strong>Αποστολή {index + 1}</strong><small>{item.title}</small></span>
                    {locked && <span className="workshop__lock" aria-hidden="true">🔒</span>}
                  </button>
                );
              })}
            </nav>

            <div className={`workshop__parchment ${solved[missionIndex] && !rewardAcknowledged[missionIndex] ? "is-rewarding" : ""}`}>
              {solved[missionIndex] && !rewardAcknowledged[missionIndex] && (
                <section className="workshop__reward-panel" role="status" aria-live="polite" aria-label="Ολοκλήρωση αποστολής">
                  <div className="workshop__reward-sparkles" aria-hidden="true">✦ ✧ ✦ ✧ ✦</div>
                  <img
                    className="workshop__reward-art"
                    src={`/assets/rewards/${["flower", "potion", "treasure"][missionIndex]}.webp`}
                    alt=""
                    draggable={false}
                  />
                  <h2 className="workshop__reward-title">{[
                    "Το μαγικό λουλούδι άνθισε!",
                    "Το φίλτρο λάμπει από σοφία!",
                    "Βρήκες τον μαγικό θησαυρό!",
                  ][missionIndex]}</h2>
                  <p className="workshop__reward-stars">{[
                    "⭐ Κέρδισες το πρώτο σου αστέρι!",
                    "⭐ Κέρδισες το δεύτερο αστέρι!",
                    "⭐⭐⭐ Κέρδισες και τα τρία αστέρια!",
                  ][missionIndex]}</p>
                  <button className="workshop__reward-next" type="button" onClick={() => {
                    setRewardAcknowledged((previous) => previous.map((value, index) => index === missionIndex ? true : value));
                    if (missionIndex === missions.length - 1) onComplete();
                    else goTo(missionIndex + 1);
                  }}>
                    {missionIndex === missions.length - 1 ? "🏆 Πάμε στις δοκιμασίες! →" : "Επόμενη αποστολή →"}
                  </button>
                </section>
              )}
              {!(solved[missionIndex] && !rewardAcknowledged[missionIndex]) && (<>
              <div className="workshop__mission-icon" aria-hidden="true">{mission.icon}</div>
              <h2>{mission.title}</h2>
              <p className="workshop__description">{mission.description}</p>
              <p className="workshop__instruction">Σύρε τις κάρτες και βάλε τις εντολές στη σωστή σειρά.</p>

              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={steps} strategy={verticalListSortingStrategy}>
                  <ol className="workshop__steps">
                    {steps.map((step) => (
                      <SortableItem key={step} id={step} icon={stepIcons[step] ?? "✨"} disabled={solved[missionIndex]} />
                    ))}
                  </ol>
                </SortableContext>
              </DndContext>

              {showHint && <p className="workshop__hint">💡 {mission.hint}</p>}
              <div className="workshop__feedback" role="status" aria-live="polite">
                {feedback === "wrong" && "🫧 Κάτι μπερδεύτηκε! Δοκίμασε ξανά — μπορείς να τα καταφέρεις!"}
                {feedback === "correct" && rewardAcknowledged[missionIndex] && mission.success}
              </div>
              <div className="workshop__actions">
                {!solved[missionIndex] && <>
                  <button className="workshop__hint-button" type="button" onClick={() => setShowHint((value) => !value)}>
                    💡 {showHint ? "Κρύψε βοήθεια" : "Βοήθεια AlgoBot"}
                  </button>
                  <button className="workshop__check" type="button" onClick={check}>✨ Έλεγχος αλγορίθμου</button>
                </>}

              </div>
              </>)}
            </div>
            <div className="workshop__wood-front" aria-hidden="true"><span>⚙</span></div>
          </section>
        </div>
      </div>
    </main>
  );
}
