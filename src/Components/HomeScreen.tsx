import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Workflow,
  BrainCircuit,
  Award,
  Rocket,
} from "lucide-react";
import LearningPath from "./LearningPath";

type Props = {
  onStart: () => void;
  onTheory: () => void;
  onActivity: () => void;
  onQuiz: () => void;
  onCertificate: () => void;
};

export default function HomeScreen({
  onStart,
  onTheory,
  onActivity,
  onQuiz,
  onCertificate,
}: Props) {
  const cards = [
    {
      icon: BookOpenCheck,
      title: "Theory",
      description: "Μάθε τι είναι οι αλγόριθμοι",
      background: "linear-gradient(135deg,#60A5FA,#2563EB)",
      onClick: onTheory,
    },
    {
      icon: Workflow,
      title: "Activity",
      description: "Ταξινόμησε σωστά τα βήματα",
      background: "linear-gradient(135deg,#34D399,#10B981)",
      onClick: onActivity,
    },
    {
      icon: BrainCircuit,
      title: "Quiz",
      description: "Έλεγξε τις γνώσεις σου",
      background: "linear-gradient(135deg,#FCD34D,#F59E0B)",
      onClick: onQuiz,
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Δες τα αποτελέσματά σου",
      background: "linear-gradient(135deg,#F9A8D4,#EC4899)",
      onClick: onCertificate,
    },
  ];

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#312E81,#2563EB)',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px',fontFamily:'Poppins,sans-serif'}}>
      <div style={{width:'100%',maxWidth:'1200px',background:'rgba(255,255,255,0.95)',borderRadius:'32px',padding:'40px',backdropFilter:'blur(10px)',boxShadow:'0 25px 50px rgba(0,0,0,0.2)'}}>
        <LearningPath current={0} />

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'25px',flexWrap:'wrap',marginBottom:'40px'}}>
          <motion.div animate={{y:[0,-12,0]}} transition={{duration:3,repeat:Infinity}}>
            <div style={{fontSize:'clamp(55px,8vw,80px)'}}>🤖</div>
          </motion.div>

          <div style={{maxWidth:'500px'}}>
            <h1 style={{margin:0,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.05,fontWeight:800}}>
              <span style={{color:'#1E293B'}}>Learn Algorithms</span>
              <br />
              <span style={{color:'#4F46E5'}}>Junior</span>
            </h1>

            <p style={{marginTop:'20px',fontSize:'1.3rem',color:'#64748B'}}>
              Ξεκίνα το μαθησιακό σου ταξίδι στους αλγορίθμους.
            </p>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px'}}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} onClick={card.onClick} whileHover={{scale:1.03,y:-10}} whileTap={{scale:0.98}} style={{background:card.background,color:'white',borderRadius:'24px',padding:'25px',cursor:'pointer',boxShadow:'0 15px 30px rgba(0,0,0,0.15)'}}>
                <Icon size={48} />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div style={{textAlign:'center',marginTop:'40px'}}>
          <motion.button onClick={onStart} whileHover={{scale:1.05}} whileTap={{scale:0.95}} style={{background:'linear-gradient(90deg,#4F46E5,#2563EB)',color:'white',border:'none',borderRadius:'20px',padding:'18px 40px',fontSize:'18px',fontWeight:'bold',cursor:'pointer'}}>
            <Rocket size={20} /> Ξεκίνησε το Μάθημα
          </motion.button>
        </div>
      </div>
    </div>
  );
}
