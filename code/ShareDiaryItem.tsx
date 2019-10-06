import * as React from "react"
import { Override, Data } from "framer"

const data = Data({ opacity: 0, opacityicon: 0 })

export function AddtoDiaryTap(): Override {
    return {
        onTap() {
            data.opacity += 1
            data.opacityicon += 1
            setTimeout(function() {
                return (data.opacity = 0)
            }, 2000)
        },
    }
}
export function ShowAddedModal(): Override {
    return {
        animate: { opacity: data.opacity },
    }
}

export function ShowAddedIcon(): Override {
    return {
        animate: { opacity: data.opacityicon },
    }
}
