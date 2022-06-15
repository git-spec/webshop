import { useEffect } from "react";

/**
 * This callback checks target of event to change states.
 * @callback targetCallback
 * @param {Object} e Event
 */

/**
 * Sets eventlisteners click/touchstart to document.
 * @param {targetCallback} fn Callback that handles states.
 */
export default function useDocEvtTarget(
    fn: (e: { target: any }) => void
): void {
    useEffect(() => {
        document.addEventListener("click", fn, true);
        document.addEventListener("touchstart", fn, true);
        return () => {
            document.removeEventListener("click", fn, true);
            document.removeEventListener("touchstart", fn, true);
        };
    });
}
