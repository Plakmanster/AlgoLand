import { createPortal } from "react-dom";
import "./RotateDeviceNotice.css";

/**
 * A portrait-phone overlay shared by all AlgoLand screens.
 * Rendered in document.body to avoid clipping and stacking contexts
 * created by the individual game screens.
 */
export default function RotateDeviceNotice() {
  return createPortal(
    <aside
      className="algoland-rotate-notice"
      aria-label="Προτροπή οριζόντιας προβολής"
      role="status"
    >
      <div className="algoland-rotate-notice__card">
        <span className="algoland-rotate-notice__symbol" aria-hidden="true">📱 ↻</span>
        <h2>Γύρισε το κινητό σου!</h2>
        <p>Το Κάστρο της Γνώσης είναι ακόμη πιο μαγικό όταν το βλέπεις οριζόντια! ✨</p>
        <p className="algoland-rotate-notice__hint">Περιστρέψε τη συσκευή σου στο πλάι.</p>
      </div>
    </aside>,
    document.body
  );
}
