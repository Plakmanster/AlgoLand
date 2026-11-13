type Props = {
  studentName: string;
  onNameChange: (value: string) => void;
};

export default function StudentProfile({ studentName, onNameChange }: Props) {
  return (
    <div style={{maxWidth:'520px',margin:'0 auto 30px auto',background:'#F8FAFC',padding:'20px',borderRadius:'20px',border:'1px solid #E2E8F0'}}>
      <h3>👤 Πώς σε λένε;</h3>
      <input
        value={studentName}
        onChange={(e)=>onNameChange(e.target.value)}
        placeholder='Πληκτρολόγησε το όνομά σου'
        style={{width:'100%',padding:'14px',borderRadius:'12px',border:'1px solid #CBD5E1'}}
      />
    </div>
  );
}
