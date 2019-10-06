import { Override } from "framer"

const variants = {
    initial: { background: "white", scale: 1 },
    tapped: { background: "#F6F7FB", scale: 0.95 },
}

export function SelectSchoolBtn(): Override {
    return {
        variants: variants,
        initial: "initial",
        whileTap: "tapped",
    }
}
