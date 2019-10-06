import { Override, transform, Data } from "framer"
import { colors } from "./canvas"

const data = Data({
    current: 0,
})

const variants = {
    enabled: { width: 14, height: 14, opacity: 1, background: "color.primary" },
    disabled: { width: 8, height: 8, opacity: 0.5, background: "gray" },
}

export function Page(): Override {
    return {
        defaultEffect: "coverflow",
        onChangePage(current) {
            data.current = current
        },
    }
}

export function Circle1(): Override {
    return {
        animate: data.current == 0 ? "enabled" : "disabled",
        variants: variants,
    }
}

export function Circle2(): Override {
    return {
        animate: data.current == 1 ? "enabled" : "disabled",
        variants: variants,
    }
}

export function Circle3(): Override {
    return {
        animate: data.current == 2 ? "enabled" : "disabled",
        variants: variants,
    }
}

export function Circle4(): Override {
    return {
        animate: data.current == 3 ? "enabled" : "disabled",
        variants: variants,
    }
}
