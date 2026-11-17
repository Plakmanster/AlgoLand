import { useLayoutEffect, useState } from "react";
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

  // Reset the viewport whenever the application changes screens.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [screen]);
  // Η υπάρχουσα προτροπή οριζόντιας προβολής αφορά τις επόμενες οθόνες.
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
    return withRotateNotice(<ActivityScreen avatarId={avatarId} onBack={() => setScreen("home")} onComplete={() => setScreen("quiz")} />);
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
