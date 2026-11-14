import { useState } from "react";
import type { AvatarId } from "./AvatarCard";
import "./TheoryScreen.css";

type Props = {
  avatarId: AvatarId | null;
  onBack: () => void;
  onNext: () => void;
};

type Companion = { name: string; image: string; encouragement: string };

const companions: Record<AvatarId, Companion> = {
  "explorer-max": { name: "Explorer Max", image: "/assets/avatars/ExplorerMax.png", encouragement: "Κάθε σπουδαία ανακάλυψη ξεκινά με ένα μικρό βήμα!" },
  "tech-nova": { name: "Tech Nova", image: "/assets/avatars/TechNova.png", encouragement: "Με σωστή σειρά, οι ιδέες μας γίνονται πράξη!" },
  "robo-cadet": { name: "RoboCadet", image: "/assets/avatars/RoboCadet.png", encouragement: "Ας χρησιμοποιήσουμε τη λογική μας για να βρούμε τη λύση!" },
  "wizard-of-logic": { name: "Wizard of Logic", image: "/assets/avatars/WizardOfLogic.png", encouragement: "Η μαγεία αρχίζει όταν σκεφτόμαστε βήμα βήμα!" },
};

const chapters = [
  { title: "Τι είναι ο αλγόριθμος;", icon: "✨" },
  { title: "Αλγόριθμοι παντού!", icon: "🏡" },
  { title: "Μικρή δοκιμασία", icon: "🗝️" },
];

export default function TheoryScreen({ avatarId, onBack, onNext }: Props) {
  const [bookOpen, setBookOpen] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const companion = avatarId ? companions[avatarId] : null;
  const correct = answer === 1;

  return (
    <main className="castle-library">
      <div className="castle-library-scene">
        <div className="castle-library-topbar">
          <button type="button" className="castle-library-back" onClick={bookOpen ? () => setBookOpen(false) : onBack}>
            ← {bookOpen ? "Στη βιβλιοθήκη" : "Στο αρχικό μενού"}
          </button>
          <span className="castle-library-location">🏰 Κάστρο της Γνώσης · Μαγική Βιβλιοθήκη</span>
        </div>

        {!bookOpen ? (
          <>
            <header className="castle-library-heading">
              <span>Κεφάλαιο 1</span>
              <h1>Η Μαγική Βιβλιοθήκη</h1>
              <p>Το βιβλίο των αλγορίθμων σε περιμένει!</p>
            </header>

            <div className="castle-library-guide castle-library-guide--bot">
              <img
                className="castle-library-guide-icon"
                src="/assets/AlgoBot.png"
                alt="Ο AlgoBot, ο οδηγός της Μαγικής Βιβλιοθήκης"
              />
              <div className="castle-library-guide-message"><strong>AlgoBot</strong><p>Καλώς ήρθες! Πάτησε το λαμπερό βιβλίο για να ξεκινήσουμε.</p></div>
            </div>

            {companion && (
              <div className="castle-library-guide castle-library-guide--avatar">
                <img src={companion.image} alt={companion.name} />
                <div className="castle-library-guide-message"><strong>{companion.name}</strong><p>{companion.encouragement}</p></div>
              </div>
            )}

            <button type="button" className="castle-library-book-target" onClick={() => setBookOpen(true)} aria-label="Άνοιξε το μαγικό βιβλίο και ξεκίνα το μάθημα">
              <span className="castle-library-book-caption">📖 Άνοιξε το μαγικό βιβλίο <span aria-hidden="true">✦</span></span>
            </button>
          </>
        ) : (
          <section className="castle-library-lesson" aria-label="Μαγικό βιβλίο των αλγορίθμων">
            <div className="castle-library-lesson-header">
              <span>📖 Το Μαγικό Βιβλίο των Αλγορίθμων</span>
              <button type="button" onClick={() => setBookOpen(false)} aria-label="Κλείσε το βιβλίο">✕</button>
            </div>
            <div className="castle-library-lesson-body">
              <nav className="castle-library-chapters" aria-label="Κεφάλαια θεωρίας">
                {chapters.map((item, index) => (
                  <button key={item.title} type="button" className={chapter === index ? "active" : ""} onClick={() => setChapter(index)} aria-current={chapter === index ? "step" : undefined}>
                    {item.icon} <span>{item.title}</span>
                  </button>
                ))}
              </nav>

              <div className="castle-library-spread" key={chapter}>
                <article className="castle-library-leaf castle-library-leaf--left">
                  <span className="castle-library-leaf-label">✦ Μαθαίνω</span>
                  {chapter === 0 && (
                    <>
                      <h2>✨ Τι είναι ο αλγόριθμος;</h2>
                      <p>Ένας <strong>αλγόριθμος</strong> είναι μια σειρά από ξεκάθαρα βήματα που ακολουθούμε για να πετύχουμε έναν στόχο ή να λύσουμε ένα πρόβλημα.</p>
                      <p className="castle-library-tip">💡 <strong>Θυμήσου:</strong> Η σειρά των βημάτων έχει σημασία!</p>
                      <p className="castle-library-guide-note">🤖 <strong>AlgoBot:</strong> Σκέψου έναν αλγόριθμο σαν οδηγίες για μια μικρή αποστολή.</p>
                    </>
                  )}
                  {chapter === 1 && (
                    <>
                      <h2>🏡 Αλγόριθμοι παντού!</h2>
                      <p>Χρησιμοποιούμε αλγορίθμους κάθε μέρα, ακόμη κι όταν δεν το καταλαβαίνουμε.</p>
                      <div className="castle-library-example"><h3>🪥 Πλένω τα δόντια μου</h3><ol><li>Βάζω οδοντόκρεμα στην οδοντόβουρτσα.</li><li>Βουρτσίζω προσεκτικά τα δόντια μου.</li><li>Φτύνω την οδοντόκρεμα και καθαρίζω την οδοντόβουρτσα.</li></ol></div>
                    </>
                  )}
                  {chapter === 2 && (
                    <>
                      <h2>🗝️ Ξεκλείδωσε τη γνώση!</h2>
                      <p>Ώρα να χρησιμοποιήσεις όσα έμαθες για τη σωστή σειρά των βημάτων.</p>
                      <p className="castle-library-tip">💡 <strong>Σκέψου:</strong> Τι πρέπει να γίνει πρώτο; Τι ακολουθεί; Τι γίνεται τελευταίο;</p>
                      <p className="castle-library-guide-note">🤖 <strong>AlgoBot:</strong> Διάβασε προσεκτικά τις επιλογές στη δεξιά σελίδα!</p>
                    </>
                  )}
                </article>
                <article className="castle-library-leaf castle-library-leaf--right">
                  <span className="castle-library-leaf-label">✦ Δοκιμάζω</span>
                  {chapter === 0 && (
                    <>
                      <h2>🍞 Φτιάχνω ένα τοστ</h2>
                      <p>Ακολούθησε τα βήματα με τη σωστή σειρά:</p>
                      <div className="castle-library-example"><ol><li>Παίρνω δύο φέτες ψωμί.</li><li>Βάζω τυρί ανάμεσά τους.</li><li>Τοποθετώ το τοστ στην τοστιέρα με τη βοήθεια ενήλικα.</li><li>Περιμένω να ψηθεί και το απολαμβάνω!</li></ol></div>
                      <p className="castle-library-tip">🌟 Δεν μπορούμε να ψήσουμε το τοστ πριν το ετοιμάσουμε!</p>
                    </>
                  )}
                  {chapter === 1 && (
                    <>
                      <h2>🎒 Ετοιμάζω την τσάντα μου</h2>
                      <div className="castle-library-example"><ol><li>Βλέπω το πρόγραμμα της επόμενης ημέρας.</li><li>Βρίσκω τα βιβλία και τα τετράδιά μου.</li><li>Τα βάζω στην τσάντα.</li><li>Ελέγχω ότι δεν ξέχασα κάτι.</li></ol></div>
                      <p className="castle-library-tip">🤖 <strong>AlgoBot:</strong> Οι σαφείς οδηγίες μάς βοηθούν να φτάσουμε στον στόχο μας.</p>
                    </>
                  )}
                  {chapter === 2 && (
                    <>
                      <h2>❓ Μικρή δοκιμασία</h2>
                      <p><strong>Ποια σειρά βημάτων είναι σωστή για να φτιάξουμε ένα τοστ;</strong></p>
                      <div className="castle-library-answers">
                        {["Ψήνω → Βάζω τυρί → Παίρνω ψωμί", "Παίρνω ψωμί → Βάζω τυρί → Ψήνω", "Βάζω τυρί → Ψήνω → Παίρνω ψωμί"].map((option, index) => (
                          <button key={option} type="button" className={answer === index ? "selected" : ""} onClick={() => setAnswer(index)} aria-pressed={answer === index}>{option}</button>
                        ))}
                      </div>
                      {answer !== null && <p className={correct ? "castle-library-feedback correct" : "castle-library-feedback"} role="status">{correct ? "🌟 Μπράβο! Πρώτα ετοιμάζουμε το τοστ και μετά το ψήνουμε!" : "🤖 Πολύ καλή προσπάθεια! Σκέψου: μπορούμε να ψήσουμε το τοστ πριν βάλουμε το τυρί;"}</p>}
                    </>
                  )}
                </article>
              </div>

              <div className="castle-library-lesson-footer">
                <button type="button" className="castle-library-secondary" onClick={() => chapter === 0 ? setBookOpen(false) : setChapter(chapter - 1)}>← {chapter === 0 ? "Κλείσιμο βιβλίου" : "Προηγούμενη σελίδα"}</button>
                {chapter < 2 ? (
                  <button type="button" className="castle-library-primary" onClick={() => setChapter(chapter + 1)}>Επόμενη σελίδα →</button>
                ) : (
                  <button type="button" className="castle-library-primary" onClick={onNext} disabled={!correct}>Στο Εργαστήριο Γρίφων →</button>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}