import { Override, motionValue, useTransform } from "framer"

const contentOffsetY = motionValue(0)

export function TrackScroll(): Override {
    return {
        contentOffsetY: contentOffsetY,
        onScroll() {
            console.log(contentOffsetY.get())
        },
    }
}

export function AppBar(): Override {
    return {
        height: useTransform(contentOffsetY, [0, -60], [174, 88]),
    }
}

export function LargeHeading(): Override {
    return {
        opacity: useTransform(contentOffsetY, [0, -40], [1, 0]),
        scale: useTransform(contentOffsetY, [0, -40], [1, 0.8]),
    }
}

export function SmallHeading(): Override {
    return {
        opacity: useTransform(contentOffsetY, [-60, -80], [0, 1]),
    }
}

export function DiaryScrollheader(): Override {
    return {
        opacity: useTransform(contentOffsetY, [0, -60], [0, 1]),
    }
}
