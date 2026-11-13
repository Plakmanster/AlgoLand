import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
};

export default function SortableItem({
  id,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform:
      CSS.Transform.toString(
        transform
      ),
    transition,
    background: "#EEF2FF",
    padding: "18px",
    borderRadius: "16px",
    marginTop: "12px",
    cursor: "grab",
    touchAction: "none" as const,
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {id}
    </div>
  );
}