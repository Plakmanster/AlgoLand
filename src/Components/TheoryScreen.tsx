import ProgressBar from "./ProgressBar";
type Props = {
  onBack: () => void;
  onNext: () => void;
};

export default function TheoryScreen({
  onBack,
  onNext,
}: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#4F46E5,#2563EB)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "900px",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.15)",
        }}
        >
        <ProgressBar progress={33} />
      
        <h1>📖 Τι είναι ο Αλγόριθμος;</h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Ένας αλγόριθμος είναι μια σειρά από
          βήματα που ακολουθούμε για να
          πετύχουμε έναν στόχο ή να λύσουμε
          ένα πρόβλημα.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Χρησιμοποιούμε αλγορίθμους κάθε
          μέρα, ακόμη και χωρίς να το
          καταλαβαίνουμε!
        </p>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#EEF2FF",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>🍞 Φτιάχνω Τοστ</h3>

            <ol>
              <li>Παίρνω ψωμί</li>
              <li>Βάζω τυρί</li>
              <li>Ψήνω το τοστ</li>
            </ol>
          </div>

          <div
            style={{
              background: "#ECFDF5",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>🪥 Πλένω τα Δόντια μου</h3>

            <ol>
              <li>Βάζω οδοντόκρεμα</li>
              <li>Βουρτσίζω τα δόντια</li>
              <li>Ξεπλένω</li>
            </ol>
          </div>

          <div
            style={{
              background: "#FEF3C7",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h3>🤖 Γιατί είναι σημαντικοί;</h3>

            <p>
              Οι αλγόριθμοι βοηθούν
              ανθρώπους και υπολογιστές
              να εκτελούν εργασίες με
              σωστή σειρά και χωρίς λάθη.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "25px",
            background: "#DBEAFE",
            padding: "20px",
            borderRadius: "16px",
            border: "2px solid #3B82F6",
          }}
        >
          <strong>💡 Θυμήσου!</strong>

          <p>
            Ένας αλγόριθμος είναι μία
            σωστή σειρά από βήματα που
            μας βοηθά να πετύχουμε έναν
            στόχο.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={onNext}
            style={{
              background: "#16A34A",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Συνέχεια ➜
          </button>

          <button
            onClick={onBack}
            style={{
              background: "#4F46E5",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            ⬅ Επιστροφή
          </button>
        </div>
      </div>
    </div>
  );
}