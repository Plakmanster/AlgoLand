import { motion } from "framer-motion";

type Props = {
  studentName: string;
  onNameChange: (value: string) => void;
  onContinue: () => void;
};

export default function WelcomeScreen({ studentName, onNameChange, onContinue }: Props) {
  const canStart = studentName.trim().length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#312E81,#2563EB)",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "950px", textAlign: "center" }}>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ fontSize: "110px", marginBottom: "-10px" }}
        >
          🤖
        </motion.div>

        <div
          style={{
            background: "white",
            borderRadius: "36px",
            padding: "36px",
            position: "relative",
            boxShadow: "0 25px 50px rgba(0,0,0,0.20)",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              left: "50%",
              transform: "translateX(-50%) rotate(45deg)",
              width: "36px",
              height: "36px",
              background: "white",
            }}
          />

          <h1 style={{ color: "#4F46E5", marginTop: 0 }}>
            Γεια σου μικρέ εξερευνητή! 👋
          </h1>

          <h2>Είμαι ο AlgoBot!</h2>

          <p style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
            Θα είμαι ο οδηγός σου στην περιπέτεια των αλγορίθμων.
          </p>

          <p style={{ fontSize: "1.15rem", lineHeight: 1.8 }}>
            Γράψε το όνομά σου για να ξεκινήσει η αποστολή!
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.95)",
            marginTop: "45px",
            padding: "28px",
            borderRadius: "28px",
            backdropFilter: "blur(10px)",
          }}
        >
          <input
            value={studentName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Το όνομά σου..."
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "18px",
              border: "2px solid #CBD5E1",
              boxSizing: "border-box",
              fontSize: "18px",
            }}
          />

          <button
            disabled={!canStart}
            onClick={onContinue}
            style={{
              marginTop: "20px",
              padding: "18px 40px",
              border: "none",
              borderRadius: "20px",
              fontSize: "18px",
              fontWeight: 700,
              color: "white",
              cursor: canStart ? "pointer" : "not-allowed",
              background: canStart
                ? "linear-gradient(90deg,#4F46E5,#2563EB)"
                : "#CBD5E1",
            }}
          >
            🚀 Ξεκίνα την Αποστολή
          </button>
        </div>
      </div>
    </div>
  );
}
