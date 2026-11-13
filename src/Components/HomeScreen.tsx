import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Workflow,
  BrainCircuit,
  Award,
} from "lucide-react";
import LearningPath from "./LearningPath";


type Props = {
  onStart: () => void;
  onTheory: () => void;
  onActivity: () => void;
  onQuiz: () => void;
  onCertificate: () => void;
  studentName: string;
  onNameChange: (value: string) => void;
};

export default function HomeScreen(props: Props) {
  const cards = [
    {
      icon: BookOpenCheck,
      title: "Theory",
      description: "Μάθε τι είναι οι αλγόριθμοι",
      background: "linear-gradient(135deg,#60A5FA,#2563EB)",
      onClick: props.onTheory,
    },
    {
      icon: Workflow,
      title: "Activity",
      description: "Ταξινόμησε σωστά τα βήματα",
      background: "linear-gradient(135deg,#34D399,#10B981)",
      onClick: props.onActivity,
    },
    {
      icon: BrainCircuit,
      title: "Quiz",
      description: "Έλεγξε τις γνώσεις σου",
      background: "linear-gradient(135deg,#FCD34D,#F59E0B)",
      onClick: props.onQuiz,
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Δες τα αποτελέσματα",
      background: "linear-gradient(135deg,#F9A8D4,#EC4899)",
      onClick: props.onCertificate,
    },
  ];

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#312E81,#2563EB)',padding:'20px',fontFamily:'Poppins,sans-serif'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',background:'rgba(255,255,255,0.95)',borderRadius:'32px',padding:'40px'}}>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'24px',flexWrap:'wrap',marginBottom:'20px'}}>
          <motion.div animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity}}>
            <div style={{fontSize:'56px'}}>🤖</div>
          </motion.div>

          <div style={{textAlign:'left'}}>
            <h1 style={{margin:0,fontSize:'clamp(2.2rem,5vw,4rem)',lineHeight:1}}>
              <span style={{color:'#1E293B'}}>Learn Algorithms</span><br/>
              <span style={{color:'#4F46E5'}}>Junior</span>
            </h1>
            <p style={{fontSize:'1.1rem',color:'#64748B'}}>
              Γεια σου {props.studentName || 'μαθητή'}!
            </p>
            <p style={{color:'#475569'}}>
              Έτοιμος να γίνεις Junior Algorithm Expert;
            </p>
          </div>
        </div>

        <LearningPath current={0} />

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px'}}>
          {cards.map(card => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} onClick={card.onClick} whileHover={{scale:1.03,y:-10}} whileTap={{scale:0.98}} style={{background:card.background,color:'white',borderRadius:'24px',padding:'25px',cursor:'pointer'}}>
                <Icon size={48}/>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
