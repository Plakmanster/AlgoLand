import { useState } from "react";

import HomeScreen from "./Components/HomeScreen";
import TheoryScreen from "./Components/TheoryScreen";
import ActivityScreen from "./Components/ActivityScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultsScreen from "./Components/ResultsScreen";

export default function App() {
  const [screen, setScreen] = useState<
    | "home"
    | "theory"
    | "activity"
    | "quiz"
    | "results"
  >("home");

  const [score, setScore] = useState(0);

  const [steps, setSteps] = useState([
    "Βάζω τυρί",
    "Ψήνω το τοστ",
    "Παίρνω ψωμί",
  ]);

  const checkAnswer = () => {
    const correct = [
      "Παίρνω ψωμί",
      "Βάζω τυρί",
      "Ψήνω το τοστ",
    ];

    if (
      JSON.stringify(steps) ===
      JSON.stringify(correct)
    ) {
      setScreen("quiz");
    } else {
      alert("❌ Δοκίμασε ξανά!");
    }
  };

  if (screen === "theory") {
    return (
      <TheoryScreen
        onBack={() =>
          setScreen("home")
        }
        onNext={() =>
          setScreen("activity")
        }
      />
    );
  }

  if (screen === "activity") {
    return (
      <ActivityScreen
        steps={steps}
        onCheck={checkAnswer}
        onReorder={setSteps}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <QuizScreen
        onFinish={(finalScore) => {
          setScore(finalScore);
          setScreen("results");
        }}
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        score={score}
        onRestart={() => {
          setScore(0);

          setSteps([
            "Βάζω τυρί",
            "Ψήνω το τοστ",
            "Παίρνω ψωμί",
          ]);

          setScreen("home");
        }}
      />
    );
  }

  return (
    <HomeScreen
      onStart={() =>
        setScreen("theory")
      }
      onTheory={() =>
        setScreen("theory")
      }
      onActivity={() =>
        setScreen("activity")
      }
      onQuiz={() =>
        setScreen("quiz")
      }
      onCertificate={() =>
        setScreen("results")
      }
    />
  );
}