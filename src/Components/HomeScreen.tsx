import { motion } from "framer-motion";
import {
  BrainCircuit,
  Rocket,
  BookOpen,
  Puzzle,
  Trophy,
} from "lucide-react";

type Props = {
  onStart: () => void;
};

export default function HomeScreen({
  onStart,
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
          maxWidth: "1000px",
          borderRadius: "32px",
          padding: "40px",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <BrainCircuit
              size={90}
              color="#4F46E5"
            />
          </motion.div>

          <h1>
            Learn Algorithms Junior
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "20px auto",
              lineHeight: "1.8",
            }}
          >
            Ανακάλυψε τον κόσμο των
            αλγορίθμων μέσα από παιχνίδια,
            δραστηριότητες και μικρές
            αποστολές.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#EEF2FF",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <BookOpen />
            <h3>Μαθήματα</h3>
          </div>

          <div
            style={{
              background: "#ECFDF5",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Puzzle />
            <h3>Δραστηριότητες</h3>
          </div>

          <div
            style={{
              background: "#FEF3C7",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Trophy />
            <h3>Badge</h3>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <motion.button
            onClick={onStart}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            style={{
              background:
                "linear-gradient(90deg,#4F46E5,#2563EB)",
              color: "white",
              border: "none",
              borderRadius: "18px",
              padding: "18px 32px",
              cursor: "pointer",
            }}
          >
            <Rocket size={20} />
            {" "}Ξεκίνησε την Περιπέτεια
          </motion.button>
        </div>
      </div>
    </div>
  );
}