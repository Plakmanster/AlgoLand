import ProgressBar from "./ProgressBar";

type Props = {
  score: number;
  onRestart: () => void;
};

export default function ResultsScreen({
  score,
  onRestart,
}: Props) {
  let badge = "🥉 Beginner";

  if (score === 2) {
    badge = "🥈 Algorithm Explorer";
  }

  if (score === 3) {
    badge = "🥇 Junior Algorithm Expert";
  }

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
          maxWidth: "800px",
          padding: "40px",
          borderRadius: "30px",
          textAlign: "center",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        <ProgressBar progress={100} />

        <h1>🏆 Συγχαρητήρια!</h1>

        <h2>
          Βαθμολογία: {score} / 3
        </h2>

        <div
          style={{
            background: "#FEF3C7",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "25px",
          }}
        >
          <h3>{badge}</h3>

          <p>
            Ολοκλήρωσες επιτυχώς το quiz
            της εφαρμογής Learn Algorithms
            Junior.
          </p>
        </div>

        <button
          onClick={onRestart}
          style={{
            marginTop: "30px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          🔄 Ξεκίνα Ξανά
        </button>
      </div>
    </div>
  );
}