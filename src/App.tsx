import { useState } from "react";

import HomeScreen from "./Components/HomeScreen";
import TheoryScreen from "./Components/TheoryScreen";
import ActivityScreen from "./Components/ActivityScreen";

export default function App() {
  const [screen, setScreen] =
    useState("home");

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
      alert(
        "✅ Μπράβο! Βρήκες τη σωστή σειρά!"
      );
    } else {
      alert(
        "❌ Δοκίμασε ξανά!"
      );
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

  return (
    <HomeScreen
      onStart={() =>
        setScreen("theory")
      }
    />
  );
}