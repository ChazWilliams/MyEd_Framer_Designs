import { Override, useCycle } from "framer"

export function Newsmove(): Override {
    const [animate, cycle] = useCycle({ top: 630 }, { top: 82 })
    return {
        animate: animate,
        onTap() {
            cycle()
        },
    }
}
