import ProgressBar from "./ProgressBar";

type Props = {
  onRestart: () => void;
};

export default function ResultsScreen({
  onRestart,
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

        <h2>Ολοκλήρωσες το μάθημα!</h2>

        <div
          style={{
            background: "#FEF3C7",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "25px",
          }}
        >
          <h3>
            🥇 Junior Algorithm Expert
          </h3>

          <p>
            Κατάφερες να μάθεις τι είναι
            ένας αλγόριθμος και να
            ολοκληρώσεις το Quiz.
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