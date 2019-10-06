import * as React from "react"
import { Override, Data } from "framer"

const appState = Data({
    opacityAmountDay: 1,
    opacityAmountWeek: 0,
    opacityAmountMonth: 0,
    opacityAmountYear: 0,
    variantChartDay: "visible",
    variantChartWeek: "hidden",
    variantChartMonth: "hidden",
    variantChartYear: "hidden",
})

const chartVariants = {
    hidden: { opacity: 0, scaleX: 1.2, transition: { duration: 0 } },
    visible: { opacity: 1, scaleX: 1 },
}

export function SegmentedControl(): Override {
    return {
        onValueChange(option, index) {
            // Hide all numbers
            appState.opacityAmountDay = 0
            appState.opacityAmountWeek = 0
            appState.opacityAmountMonth = 0
            appState.opacityAmountYear = 0

            // Hide all charts
            appState.variantChartDay = "hidden"
            appState.variantChartWeek = "hidden"
            appState.variantChartMonth = "hidden"
            appState.variantChartYear = "hidden"

            if (index === 0) {
                appState.opacityAmountDay = 1
                appState.variantChartDay = "visible"
            } else if (index === 1) {
                appState.opacityAmountWeek = 1
                appState.variantChartWeek = "visible"
            } else if (index === 2) {
                appState.opacityAmountMonth = 1
                appState.variantChartMonth = "visible"
            } else if (index === 3) {
                appState.opacityAmountYear = 1
                appState.variantChartYear = "visible"
            }
        },
    }
}

export function Amount_Day(): Override {
    return {
        animate: { opacity: appState.opacityAmountDay },
    }
}
export function Amount_Week(): Override {
    return {
        animate: { opacity: appState.opacityAmountWeek },
    }
}
export function Amount_Month(): Override {
    return {
        animate: { opacity: appState.opacityAmountMonth },
    }
}
export function Amount_Year(): Override {
    return {
        animate: { opacity: appState.opacityAmountYear },
    }
}

export function Chart_Day(): Override {
    return {
        variants: chartVariants,
        animate: appState.variantChartDay,
    }
}
export function Chart_Week(): Override {
    return {
        variants: chartVariants,
        animate: appState.variantChartWeek,
    }
}
export function Chart_Month(): Override {
    return {
        variants: chartVariants,
        animate: appState.variantChartMonth,
    }
}
export function Chart_Year(): Override {
    return {
        variants: chartVariants,
        animate: appState.variantChartYear,
    }
}
