import { Override, Data, useCycle } from "framer"

const updates = Data({ isOpen: false })

//Example 1 with Data
//attach to parent card
export function updatesExpand(props): Override {
    const variants = {
        open: { height: 520 },
        closed: { height: 82 },
    }
    return {
        variants: variants,
        initial: "closed",
        animate: updates.isOpen ? "open" : "closed",
    }
}

//attach link layer
export function updatesToggle(props): Override {
    return {
        onTap() {
            updates.isOpen = !updates.isOpen
        },
    }
}

export function Icon(props): Override {
    return {
        variants: { open: { rotate: 180 }, closed: { rotate: 0 } },
        initial: "closed",
        transition: { ease: "easeInOut", duration: 0.2 },
    }
}
