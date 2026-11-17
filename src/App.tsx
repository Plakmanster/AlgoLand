import { useState } from "react";
import RotateDeviceNotice from "./Components/RotateDeviceNotice";
import AvatarSelectionScreen from "./Components/AvatarSelectionScreen";
import type { AvatarId } from "./Components/AvatarCard";
import WelcomeScreen from "./Components/WelcomeScreen";
import HomeScreen from "./Components/HomeScreen";
import TheoryScreen from "./Components/TheoryScreen";
import ActivityScreen from "./Components/ActivityScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultsScreen from "./Components/ResultsScreen";

export default function App() {
  const [screen, setScreen] = useState<
    "welcome" | "avatar" | "home" | "theory" | "activity" | "quiz" | "results"
  >("welcome");
  const [studentName, setStudentName] = useState("");
  const [avatarId, setAvatarId] = useState<AvatarId | null>(null);
  console.log("Selected AlgoLand avatar:", avatarId);
  const [score, setScore] = useState(0);
  const [steps, setSteps] = useState(["Βάζω τυρί", "Ψήνω το τοστ", "Παίρνω ψωμί"]);

  const checkAnswer = () => {
    const correct = ["Παίρνω ψωμί", "Βάζω τυρί", "Ψήνω το τοστ"];
    JSON.stringify(steps) === JSON.stringify(correct)
      ? setScreen("quiz")
      : alert("❌ Δοκίμασε ξανά!");
  };

  // Η προτροπή εμφανίζεται μόνο στις οθόνες avatar και home.
  const withRotateNotice = (content: React.ReactNode) => (
    <>
      {content}
      <RotateDeviceNotice />
    </>
  );

  if (screen === "welcome") {
    return (
      <WelcomeScreen
        studentName={studentName}
        onNameChange={setStudentName}
        onContinue={() => setScreen("avatar")}
      />
    );
  }

  if (screen === "avatar") {
    return withRotateNotice(
      <AvatarSelectionScreen
        studentName={studentName}
        onBack={() => setScreen("welcome")}
        onContinue={(id) => {
          setAvatarId(id);
          setScreen("home");
        }}
      />
    );
  }

  if (screen === "theory") {
    return (
      <TheoryScreen
        avatarId={avatarId}
        onBack={() => setScreen("home")}
        onNext={() => setScreen("activity")}
      />
    );
  }

  if (screen === "activity") {
    return <ActivityScreen steps={steps} onCheck={checkAnswer} onReorder={setSteps} />;
  }

  if (screen === "quiz") {
    return <QuizScreen onFinish={(s) => { setScore(s); setScreen("results"); }} />;
  }

  if (screen === "results") {
    return <ResultsScreen score={score} onRestart={() => setScreen("home")} />;
  }

  return withRotateNotice(
    <HomeScreen
      studentName={studentName}
      avatarId={avatarId}
      onBack={() => setScreen("avatar")}
      onNameChange={() => {}}
      onStart={() => setScreen("theory")}
      onTheory={() => setScreen("theory")}
      onActivity={() => setScreen("activity")}
      onQuiz={() => setScreen("quiz")}
      onCertificate={() => setScreen("results")}
    />
  );
}
