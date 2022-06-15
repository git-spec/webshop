import { useState, useEffect } from "react";
import { ISize } from "../interfaces/ISize";

/**
 * Sets sizes of window after initializing state with undefined values
 * to matches renders of server and client
 * @return {ISize} Returns sizes of window
 */
export function useWindowSize(): ISize {
    const [windowSize, setWindowSize] = useState<ISize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        /**
         * Handler to call on window resize
         * @return {void}
         */
        function handleResize(): void {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        /** State gets updated with initial window size */
        handleResize();

        /**
         * Cleanup
         * @return {void}
         */
        return (): void => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}
