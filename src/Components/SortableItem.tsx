import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = { id: string; icon?: string; disabled?: boolean };

export default function SortableItem({ id, icon = "✨", disabled = false }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled });

  return (
    <li ref={setNodeRef}
      {...attributes} {...listeners}
      role="button" tabIndex={disabled ? -1 : 0}
      aria-label={`Σύρε την εντολή: ${id}`}
      className={`workshop__step ${isDragging ? "is-dragging" : ""}`}
      style={{ transform: CSS.Transform.toString(transform), transition }}>
      <span className="workshop__step-icon" aria-hidden="true">{icon}</span>
      <span className="workshop__step-text">{id}</span>
      <span className="workshop__drag" aria-hidden="true">⠿</span>
    </li>
  );
}
