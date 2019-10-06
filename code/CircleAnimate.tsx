import { Override } from "framer"

export function CircleScale(): Override {
    return {
        animate: { scale: 1.5, opacity: 0 },
        transition: { duration: 2, ease: "linear", loop: Infinity },
    }
}
