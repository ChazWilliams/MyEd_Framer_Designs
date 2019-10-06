import { Override } from "framer"

const variants = {
    hide: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
            ease: "easeInOut",
            duration: 0.8,
        },
    },
}

const childrenVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
}

export function Parent(): Override {
    return {
        initial: "hide",
        animate: "show",
        variants: variants,
    }
}

export function Children(): Override {
    return {
        variants: variants,
    }
}
