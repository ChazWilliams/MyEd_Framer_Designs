import { Override, Data } from "framer"

const data = Data({
    isDownloading: false,
    downloadCompleted: false,
    switchedTab: true,
})

// Track tap on download button
export function TapDownloadAction(): Override {
    return {
        triggerDownload() {
            data.isDownloading = true
            console.log(data.isDownloading)
            setTimeout(() => {
                data.isDownloading = false
                console.log(data.isDownloading)
                data.downloadCompleted = true
            }, 3000)
        },
    }
}

// Animate spinner when download is active
export function AnimateSpinnerIcon(): Override {
    return {
        animate: {
            opacity: data.isDownloading ? 1 : 0,
            scale: data.isDownloading ? 1 : 0,
        },
    }
}

// Hide download icon when download is active
export function AnimateDownloadIcon(): Override {
    return {
        animate: {
            opacity: data.isDownloading ? 0 : 1,
            scale: data.isDownloading ? 0 : 1,
        },
    }
}

export function ShowDownloadRow(): Override {
    return {
        animate: {
            opacity: data.downloadCompleted ? 1 : 0,
        },
    }
}
