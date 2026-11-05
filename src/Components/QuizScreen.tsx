import { useState } from "react";
import ProgressBar from "./ProgressBar";

type Props = {
  onFinish: (score: number) => void;
};

const questions = [
  {
    question: "Τι είναι ένας αλγόριθμος;",
    answers: ["Ένα παιχνίδι", "Ένας υπολογιστής", "Μια σειρά βημάτων", "Μια ζωγραφιά"],
    correct: "Μια σειρά βημάτων",
  },
  {
    question: "Ποιο είναι παράδειγμα αλγορίθμου;",
    answers: ["Μία συνταγή για τοστ", "Ένα χρώμα", "Ένα παιχνίδι", "Ένα βιβλίο"],
    correct: "Μία συνταγή για τοστ",
  },
  {
    question: "Γιατί χρησιμοποιούμε αλγορίθμους;",
    answers: ["Για διακόσμηση", "Για σωστή σειρά ενεργειών", "Για ζωγραφική", "Για μουσική"],
    correct: "Για σωστή σειρά ενεργειών",
  },
];

export default function QuizScreen({ onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const current = questions[index];

  const nextQuestion = () => {
    const newScore = selected === current.correct ? score + 1 : score;

    if (index === questions.length - 1) {
      onFinish(newScore);
      return;
    }

    setScore(newScore);
    setIndex(index + 1);
    setSelected("");
  };

  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(135deg,#4F46E5,#2563EB)', display:'flex', justifyContent:'center', alignItems:'center', padding:'20px', fontFamily:"Poppins, sans-serif" }}>
      <div style={{ background:'white', maxWidth:'800px', width:'100%', padding:'40px', borderRadius:'30px' }}>
        <ProgressBar progress={100} />
        <h1>❓ Quiz</h1>
        <h3>Ερώτηση {index + 1}/3</h3>
        <h2>{current.question}</h2>
        <div style={{display:'grid', gap:'10px'}}>
          {current.answers.map(a => (
            <button key={a} onClick={() => setSelected(a)} style={{padding:'14px', borderRadius:'12px', border:selected===a?'3px solid #4F46E5':'1px solid #CBD5E1'}}>{a}</button>
          ))}
        </div>
        <button onClick={nextQuestion} disabled={!selected} style={{marginTop:'20px'}}>Συνέχεια</button>
      </div>
    </div>
  );
}
