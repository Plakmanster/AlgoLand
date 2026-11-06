import { Home, BookOpenCheck, Workflow, BrainCircuit, Award } from "lucide-react";

type Props = { current: number };

export default function LearningPath({ current }: Props) {
  const items = [Home, BookOpenCheck, Workflow, BrainCircuit, Award];
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'12px',marginBottom:'30px',flexWrap:'wrap'}}>
      {items.map((Icon,index)=>(
        <div key={index} style={{display:'flex',alignItems:'center'}}>
          <div style={{width:48,height:48,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:index<=current?'#4F46E5':'#CBD5E1',color:'white'}}>
            <Icon size={22}/>
          </div>
          {index<items.length-1 && <div style={{width:40,height:4,background:index<current?'#4F46E5':'#CBD5E1'}} />}
        </div>
      ))}
    </div>
  );
}
