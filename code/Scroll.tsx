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
        height: useTransform(contentOffsetY, [0, -60], [144, 88]),
    }
}

export function LargeHeading(): Override {
    return {
        opacity: useTransform(contentOffsetY, [0, -40], [1, 0]),
        scale: useTransform(contentOffsetY, [0, -40], [1, 0.95]),
    }
}

export function SmallHeading(): Override {
    return {
        opacity: useTransform(contentOffsetY, [-60, -90], [0, 1]),
    }
}

export function SearchIcon(): Override {
    return {
        originX: 1, // Icon is anchored to the right when scaling
        bottom: useTransform(contentOffsetY, [0, -72], [15, 18]),
        scale: useTransform(contentOffsetY, [-30, -72], [1, 0.7]),
        y: useTransform(contentOffsetY, [0, -72], [0, 8]),
        right: useTransform(contentOffsetY, [0, -72], [24, 16]),
    }
}
