import { Override } from "framer"

export function UpdatesDrag(): Override {
    return { drag: "y", dragConstraints: { top: -900, bottom: 0 } }
}
