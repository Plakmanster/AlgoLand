import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import ProgressBar from "./ProgressBar";
import SortableItem from "./SortableItem";

type Props = {
  steps: string[];
  onCheck: () => void;
  onReorder: (
    newSteps: string[]
  ) => void;
};

export default function ActivityScreen({
  steps,
  onCheck,
  onReorder,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (
    event: any
  ) => {
    const { active, over } =
      event;

    if (
      !over ||
      active.id === over.id
    ) {
      return;
    }

    const oldIndex =
      steps.findIndex(
        (item) =>
          item === active.id
      );

    const newIndex =
      steps.findIndex(
        (item) =>
          item === over.id
      );

    if (
      oldIndex === -1 ||
      newIndex === -1
    ) {
      return;
    }

    const reordered =
      arrayMove(
        steps,
        oldIndex,
        newIndex
      );

    onReorder(reordered);
  };

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
        fontFamily:
          "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "850px",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        <ProgressBar progress={66} />

        <h1>🍞 Φτιάχνω Τοστ</h1>

        <p>
          Σύρε τα βήματα στη σωστή
          σειρά.
        </p>

        <DndContext
          sensors={sensors}
          collisionDetection={
            closestCenter
          }
          onDragEnd={
            handleDragEnd
          }
        >
          <SortableContext
            items={steps}
            strategy={
              verticalListSortingStrategy
            }
          >
            {steps.map((step) => (
              <SortableItem
                key={step}
                id={step}
              />
            ))}
          </SortableContext>
        </DndContext>

        <button
          onClick={onCheck}
          style={{
            marginTop: "25px",
            background:
              "#16A34A",
            color: "white",
            border: "none",
            padding:
              "14px 24px",
            borderRadius:
              "12px",
            cursor:
              "pointer",
          }}
        >
          ✅ Έλεγχος
        </button>
      </div>
    </div>
  );
}