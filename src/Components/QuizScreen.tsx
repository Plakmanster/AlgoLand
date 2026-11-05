import { useState } from "react";
import ProgressBar from "./ProgressBar";

type Props = {
  onFinish: () => void;
};

export default function QuizScreen({
  onFinish,
}: Props) {
  const [selected, setSelected] =
    useState("");

  const [message, setMessage] =
    useState("");

  const checkAnswer = () => {
    if (
      selected ===
      "Μια σειρά βημάτων"
    ) {
      setMessage(
        "✅ Σωστά!"
      );
    } else {
      setMessage(
        "❌ Λάθος απάντηση."
      );
    }
  };

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
        fontFamily:
          "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "800px",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        <ProgressBar progress={100} />

        <h1>❓ Quiz</h1>

        <h2>
          Τι είναι ένας αλγόριθμος;
        </h2>

        <div
          style={{
            display: "grid",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {[
            "Ένα παιχνίδι",
            "Ένας υπολογιστής",
            "Μια σειρά βημάτων",
            "Μια ζωγραφιά",
          ].map((answer) => (
            <button
              key={answer}
              onClick={() =>
                setSelected(answer)
              }
              style={{
                padding: "14px",
                borderRadius: "12px",
                border:
                  selected === answer
                    ? "3px solid #4F46E5"
                    : "1px solid #CBD5E1",
                background:
                  selected === answer
                    ? "#EEF2FF"
                    : "#FFFFFF",
                cursor: "pointer",
              }}
            >
              {answer}
            </button>
          ))}
        </div>

        <button
          onClick={checkAnswer}
          style={{
            marginTop: "25px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Έλεγχος
        </button>

        {message && (
          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        {message === "✅ Σωστά!" && (
          <button
            onClick={onFinish}
            style={{
              marginTop: "20px",
              background: "#16A34A",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Ολοκλήρωση
          </button>
        )}
      </div>
    </div>
  );
}

