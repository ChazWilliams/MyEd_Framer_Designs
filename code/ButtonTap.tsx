import { Override } from "framer"

const variants = {
    initial: { scale: 1 },
    tapped: { scale: 0.95 },
}

export function BtnTap(): Override {
    return {
        variants: variants,
        initial: "initial",
        whileTap: "tapped",
    }
}
