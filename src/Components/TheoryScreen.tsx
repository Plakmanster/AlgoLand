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
  { title: "Εντολές και ακολουθία", icon: "🧩" },
  { title: "Βρίσκω και διορθώνω λάθη", icon: "🔍" },
  { title: "Έτοιμοι για αποστολή!", icon: "🚀" },
];

export default function TheoryScreen({ avatarId, onBack, onNext }: Props) {
  const [bookOpen, setBookOpen] = useState(false);
  const [chapter, setChapter] = useState(0);
  const companion = avatarId ? companions[avatarId] : null;

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
                      <p>Κάθε αλγόριθμος έχει έναν <strong>στόχο</strong>, μια <strong>αρχή</strong> και βήματα που μπορούμε να ακολουθήσουμε.</p>
                      <p>Οι οδηγίες πρέπει να είναι αρκετά σαφείς ώστε να καταλαβαίνει κάποιος τι ακριβώς χρειάζεται να κάνει.</p>
                      <p className="castle-library-tip">💡 <strong>Θυμήσου:</strong> Η σειρά των βημάτων έχει σημασία!</p>
                      <p className="castle-library-guide-note">🤖 <strong>AlgoBot:</strong> Σκέψου έναν αλγόριθμο σαν οδηγίες για μια μικρή αποστολή.</p>
                    </>
                  )}
                  {chapter === 1 && (
                    <>
                      <h2>🏡 Αλγόριθμοι παντού!</h2>
                      <p>Χρησιμοποιούμε αλγορίθμους κάθε μέρα, ακόμη κι όταν δεν το καταλαβαίνουμε: όταν ετοιμαζόμαστε για το σχολείο, φροντίζουμε ένα φυτό ή οργανώνουμε ένα παιχνίδι.</p>
                      <p>Δεν χρειάζεται υπολογιστής για να υπάρχει αλγόριθμος. Αρκεί να έχουμε έναν στόχο και συγκεκριμένα βήματα.</p>
                      <div className="castle-library-example"><h3>🪥 Πλένω τα δόντια μου</h3><ol><li>Βάζω οδοντόκρεμα στην οδοντόβουρτσα.</li><li>Βουρτσίζω προσεκτικά τα δόντια μου.</li><li>Φτύνω την οδοντόκρεμα και καθαρίζω την οδοντόβουρτσα.</li></ol></div>
                    </>
                  )}
                  {chapter === 2 && (
                    <>
                      <h2>🧩 Εντολές και ακολουθία</h2>
                      <p>Μια <strong>εντολή</strong> είναι μια ξεκάθαρη οδηγία: «Προχώρησε δύο βήματα» ή «Πότισε τη γλάστρα».</p>
                      <p><strong>Ακολουθία</strong> ονομάζουμε την εκτέλεση των εντολών με τη σειρά, από την πρώτη ως την τελευταία.</p>
                      <p className="castle-library-tip">💡 Αν αλλάξουμε τη σειρά, μπορεί να αλλάξει και το αποτέλεσμα.</p>
                    </>
                  )}
                  {chapter === 3 && (
                    <>
                      <h2>🔍 Μαθαίνω από τα λάθη</h2>
                      <p>Μερικές φορές ένας αλγόριθμος δεν πετυχαίνει τον στόχο του. Τότε κοιτάζουμε προσεκτικά τα βήματα για να εντοπίσουμε τι δεν πήγε σωστά.</p>
                      <p>Αυτή η διαδικασία λέγεται <strong>αποσφαλμάτωση</strong>: βρίσκω το λάθος, το διορθώνω και δοκιμάζω ξανά.</p>
                      <p className="castle-library-guide-note">🤖 <strong>AlgoBot:</strong> Ένα λάθος είναι ευκαιρία να σκεφτούμε καλύτερα!</p>
                    </>
                  )}
                  {chapter === 4 && (
                    <>
                      <h2>🚀 Ώρα για το Εργαστήριο!</h2>
                      <p>Τώρα ξέρεις ότι ένας αλγόριθμος είναι μια σειρά από σαφείς εντολές που μας οδηγούν σε έναν στόχο.</p>
                      <p>Στο <strong>Εργαστήριο Γρίφων</strong> θα μετακινήσεις μαγικές εντολές, θα ελέγξεις τη σειρά τους και θα ανακαλύψεις τι συμβαίνει όταν όλα μπουν στη σωστή θέση.</p>
                      <p className="castle-library-tip">⭐ Δεν χρειάζεται να τα καταφέρεις με την πρώτη. Παρατήρησε, σκέψου και ξαναδοκίμασε!</p>
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
                      <h2>🌱 Φροντίζω ένα φυτό</h2>
                      <p>Δες πώς μια ακολουθία εντολών μας βοηθά να πετύχουμε έναν στόχο:</p>
                      <div className="castle-library-example"><ol><li>Γεμίζω τη γλάστρα με χώμα.</li><li>Βάζω τον σπόρο στο χώμα.</li><li>Ποτίζω τη γλάστρα.</li><li>Την τοποθετώ σε κατάλληλο φωτεινό σημείο.</li></ol></div>
                      <p className="castle-library-tip">🌟 Αν ποτίσω μια άδεια γλάστρα, δεν έχω φυτέψει ακόμη τον σπόρο!</p>
                    </>
                  )}
                  {chapter === 3 && (
                    <>
                      <h2>🛠️ Διορθώνω τη σειρά</h2>
                      <p>Φαντάσου ότι ο AlgoBot θέλει να ετοιμάσει την τσάντα του, αλλά ακολουθεί αυτές τις οδηγίες:</p>
                      <div className="castle-library-example"><ol><li>Κλείνω την τσάντα.</li><li>Βάζω μέσα τα βιβλία.</li><li>Ελέγχω το πρόγραμμα.</li></ol></div>
                      <p>Η σειρά αυτή δεν τον βοηθά. Θα ήταν καλύτερα να <strong>ελέγξει πρώτα το πρόγραμμα</strong>, μετά να βάλει τα βιβλία και στο τέλος να κλείσει την τσάντα.</p>
                      <p className="castle-library-tip">🔍 Ελέγχω τη σειρά, διορθώνω και δοκιμάζω ξανά.</p>
                    </>
                  )}
                  {chapter === 4 && (
                    <>
                      <h2>🪄 Τρεις μαγικές αποστολές</h2>
                      <div className="castle-library-example"><ol><li>🌸 Βοήθησε ένα μαγικό λουλούδι να ανθίσει.</li><li>🧪 Φτιάξε το Φίλτρο της Σοφίας.</li><li>🗝️ Ακολούθησε το Μονοπάτι του Θησαυρού.</li></ol></div>
                      <p>Σε κάθε αποστολή θα σύρεις τις κάρτες στη σωστή σειρά και θα πατήσεις <strong>«Έλεγχος αλγορίθμου»</strong>.</p>
                      <p className="castle-library-guide-note">🤖 <strong>AlgoBot:</strong> Έτοιμος; Πάμε να χρησιμοποιήσουμε όσα μάθαμε!</p>
                    </>
                  )}
                </article>
              </div>

              <div className="castle-library-lesson-footer">
                <button type="button" className="castle-library-secondary" onClick={() => chapter === 0 ? setBookOpen(false) : setChapter(chapter - 1)}>← {chapter === 0 ? "Κλείσιμο βιβλίου" : "Προηγούμενη σελίδα"}</button>
                {chapter < chapters.length - 1 ? (
                  <button type="button" className="castle-library-primary" onClick={() => setChapter(chapter + 1)}>Επόμενη σελίδα →</button>
                ) : (
                  <button type="button" className="castle-library-primary" onClick={onNext}>Στο Εργαστήριο Γρίφων →</button>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}