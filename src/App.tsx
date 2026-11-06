import { useState } from "react";
import WelcomeScreen from "./Components/WelcomeScreen";
import HomeScreen from "./Components/HomeScreen";
import TheoryScreen from "./Components/TheoryScreen";
import ActivityScreen from "./Components/ActivityScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultsScreen from "./Components/ResultsScreen";

export default function App() {
 const [screen,setScreen]=useState<"welcome"|"home"|"theory"|"activity"|"quiz"|"results">('welcome');
 const [studentName,setStudentName]=useState('');
 const [score,setScore]=useState(0);
 const [steps,setSteps]=useState(["Βάζω τυρί","Ψήνω το τοστ","Παίρνω ψωμί"]);

 const checkAnswer=()=>{
  const correct=["Παίρνω ψωμί","Βάζω τυρί","Ψήνω το τοστ"];
  JSON.stringify(steps)===JSON.stringify(correct)?setScreen('quiz'):alert('❌ Δοκίμασε ξανά!');
 };

 if(screen==='welcome') return <WelcomeScreen studentName={studentName} onNameChange={setStudentName} onContinue={()=>setScreen('home')} />;
 if(screen==='theory') return <TheoryScreen onBack={()=>setScreen('home')} onNext={()=>setScreen('activity')} />;
 if(screen==='activity') return <ActivityScreen steps={steps} onCheck={checkAnswer} onReorder={setSteps} />;
 if(screen==='quiz') return <QuizScreen onFinish={(s)=>{setScore(s);setScreen('results')}} />;
 if(screen==='results') return <ResultsScreen score={score} onRestart={()=>setScreen('home')} />;

 return <HomeScreen studentName={studentName} onNameChange={setStudentName} onStart={()=>setScreen('theory')} onTheory={()=>setScreen('theory')} onActivity={()=>setScreen('activity')} onQuiz={()=>setScreen('quiz')} onCertificate={()=>setScreen('results')} />;
}
