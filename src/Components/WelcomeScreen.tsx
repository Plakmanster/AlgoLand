import welcomeImage from "../assets/welcome-screen.webp";

type Props = {
  studentName: string;
  onNameChange: (
    value: string
  ) => void;
  onContinue: () => void;
};

export default function WelcomeScreen({
  studentName,
  onNameChange,
  onContinue,
}: Props) {
  const canStart =
    studentName.trim().length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1024px",
          position: "relative",
        }}
      >
        <img
         src={welcomeImage}
          alt="AlgoLand Welcome"
         style={{
          width: "100%",
           height: "auto",
         display: "block",
  }}
/>

        {/* INPUT */}

        <input
          value={studentName}
          onChange={(e) =>
            onNameChange(
              e.target.value
            )
          }
          placeholder="👤 Βάλε το όνομά σου για να ξεκινήσουμε..."
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 4px rgba(91,61,245,0.35)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow =
              "none";
          }}
          style={{
            position: "absolute",

            left: "26%",
            top: "72.2%",

            width: "48%",
            height: "4.2%",

            background: "#FFFFFF",

            border: "none",

            outline: "none",

            borderRadius: "14px",

            transition:
              "box-shadow 0.2s ease",

            textAlign: "center",

            fontSize: "clamp(12px, 1.8vw, 20px)",

            fontWeight: 600,

            color: "#334155",
          }}
        />

        {/* BUTTON */}

        <button
          disabled={!canStart}
          onClick={onContinue}
          style={{
            position:
              "absolute",

            left: "25%",
            top: "78.6%",

            width: "50%",
            height: "5.5%",

            border: "none",

            borderRadius:
              "20px",

            background:
              "linear-gradient(90deg,#5B3DF5,#7C3AED)",

            opacity:
              canStart
                ? 1
                : 0.55,

            color:
              "white",

            fontWeight:
              "bold",

            fontSize:
              "clamp(12px, 1.8vw, 18px)",

            cursor:
              canStart
                ? "pointer"
                : "not-allowed",

            boxShadow:
              canStart
                ? "0 0 0 4px rgba(124,58,237,0.35)"
                : "none",

            transition:
              "all 0.2s ease",
          }}
        >
          🚀 Ξεκίνα την Αποστολή
        </button>
      </div>
    </div>
  );
}