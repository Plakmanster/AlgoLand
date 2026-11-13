type Props = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <strong>Πρόοδος</strong>

        <span>{progress}%</span>
      </div>

      <div
        style={{
          height: "12px",
          background: "#E2E8F0",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#4F46E5,#2563EB)",
          }}
        />
      </div>
    </div>
  );
}