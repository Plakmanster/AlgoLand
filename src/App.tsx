import { useState } from "react";

import HomeScreen from "./Components/HomeScreen";
import TheoryScreen from "./Components/TheoryScreen";
import ActivityScreen from "./Components/ActivityScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultsScreen from "./Components/ResultsScreen";

export default function App() {
  const [screen, setScreen] =
    useState<
      | "home"
      | "theory"
      | "activity"
      | "quiz"
      | "results"
    >("home");

  const [steps, setSteps] =
    useState([
      "Βάζω τυρί",
      "Ψήνω το τοστ",
      "Παίρνω ψωμί",
    ]);

  const moveUp = (
    index: number
  ) => {
    if (index === 0) return;

    const newSteps = [...steps];

    [
      newSteps[index - 1],
      newSteps[index],
    ] = [
      newSteps[index],
      newSteps[index - 1],
    ];

    setSteps(newSteps);
  };

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
        onMoveUp={moveUp}
        onCheck={checkAnswer}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <QuizScreen
        onFinish={() =>
          setScreen("results")
        }
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        onRestart={() =>
          setScreen("home")
        }
      />
    );
  }

  return (
    <HomeScreen
      onStart={() =>
        setScreen("theory")
      }
    />
  );
}
