type Props = {
  steps: string[];
  onMoveUp: (index: number) => void;
  onCheck: () => void;
};

export default function ActivityScreen({
  steps,
  onMoveUp,
  onCheck,
}: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#4F46E5,#2563EB)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "800px",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        <h1>🍞 Φτιάχνω Τοστ</h1>

        <p>
          Βάλε τα βήματα στη σωστή σειρά για να
          φτιάξεις ένα τοστ.
        </p>

        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#EEF2FF",
              padding: "15px",
              borderRadius: "12px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{step}</span>

            <button
              onClick={() => onMoveUp(index)}
              style={{
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ⬆
            </button>
          </div>
        ))}

        <button
          onClick={onCheck}
          style={{
            marginTop: "20px",
            background: "#16A34A",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          ✅ Έλεγχος Απάντησης
        </button>
      </div>
    </div>
  );
}