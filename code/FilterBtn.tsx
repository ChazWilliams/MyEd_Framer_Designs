import { Override } from "framer"

const variants = {
    initial: { background: "white", color: "blue" },
    tapped: { background: "#F6F7FB", color: "white" },
}

export function Filterbtn(): Override {
    return {
        variants: variants,
        initial: "initial",
        whileTap: "tapped",
    }
}
