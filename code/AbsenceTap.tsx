//Makes the Report Absence button expand the size of the page

import { Override } from "framer"
import { useState } from "react"

export function AbsenceGrowTap(): Override {
    const [currentScale, setScale] = useState(1)

    return {
        animate: { scale: currentScale },
        onTap() {
            setScale(20)
        },
    }
}
