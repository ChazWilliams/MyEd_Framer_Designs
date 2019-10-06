import * as React from "react"
import {
    Frame,
    Stack,
    ControlType,
    addPropertyControls,
    useAnimation,
    motionValue,
    useTransform,
    animate,
} from "framer"
import {
    Icon_Archive,
    Icon_Parents,
    Icon_School,
    Icon_More_horiz,
} from "./canvas"

// Build out the strucutre of the component with Frames and Stacks
// Think about what you want to be different between each instance of the row, and what can stay the same
// Setup Property Controls to change icon, icon container color, and metadata using props
// Actions in the row below are static, no need for props

// Add imported icons to object for reference
const icons = {
    a: Icon_School,
    b: Icon_Parents,
}

export function ActionRow(props) {
    // Designate row's icon based on the dropdown choice
    let Icon = icons[props.iconChoice]

    // Setup dragging interaction values
    const dragWidth = -100
    const dragFull = { x: dragWidth }
    const dragReset = { x: 0 }
    const contentOffsetX = motionValue(0)
    const controls = useAnimation()

    return (
        <Frame
            name={"Master Container"}
            width={props.width}
            height={props.height}
        >
            {/* Bottom Row w/ Static Actions */}
            <Stack
                name={"Bottom Row"}
                direction={"horizontal"}
                distribution={"end"}
                width={"100%"}
                height={"100%"}
                gap={24}
                paddingRight={12}
                background={"white"}
            >
                <Icon_More_horiz
                    visible={props.iconChoice != "k" ? true : false}
                    rotate={useTransform(
                        contentOffsetX,
                        [dragWidth / 2, dragWidth],
                        [25, 0]
                    )}
                    scale={useTransform(
                        contentOffsetX,
                        [dragWidth / 2, dragWidth],
                        [0.5, 1]
                    )}
                    whileTap={{ opacity: 0.3 }}
                    onTap={() => {
                        props.triggerDownload()
                    }}
                />
                <Icon_Archive
                    rotate={useTransform(
                        contentOffsetX,
                        [0, dragWidth / 2],
                        [25, 0]
                    )}
                    scale={useTransform(
                        contentOffsetX,
                        [0, dragWidth / 2],
                        [0.5, 1]
                    )}
                    whileTap={{ opacity: 0.3 }}
                />
            </Stack>
            {/* Top Row w/ Props */}
            <Stack
                name={"Top Row"}
                direction={"horizontal"}
                distribution={"start"}
                width={"100%"}
                height={"100%"}
                gap={16}
                background={props.rowColor}
                drag={"x"}
                paddingLeft={24}
                x={contentOffsetX}
                dragConstraints={{ left: dragWidth, right: 0 }}
                dragDirectionLock={true}
                animate={controls}
                onDrag={() => {
                    // This allows you to track the distance you'd like to drag
                    // console.log(contentOffsetX.get());
                }}
                onDragEnd={() => {
                    // This snaps back or all the way to the left based on drag position
                    if (contentOffsetX.get() > dragWidth / 2) {
                        controls.start(dragReset)
                    } else if (contentOffsetX.get() < dragWidth / 2) {
                        controls.start(dragFull)
                    }
                }}
            >
                {/* Row Icon */}
                <Frame
                    name={"Icon Container"}
                    size={48}
                    borderRadius={48 / 2}
                    background={props.iconColor}
                >
                    <Icon center />
                    <Frame
                        name={"notification circle"}
                        size={24}
                        background={props.showNotification}
                        borderRadius={24 / 2}
                        top={-5}
                        right={-5}
                    >
                        <Frame
                            name={"Notification Number"}
                            width={"100%"}
                            height={"100%"}
                            background={"null"}
                            color={"white"}
                            center
                        >
                            {props.strNotifNo}
                        </Frame>
                    </Frame>
                </Frame>
                {/* Row Metadata */}
                <Stack
                    name={"Metadata"}
                    width={"1fr"}
                    height={"100%"}
                    distribution={"center"}
                    gap={2}
                    alignment={"start"}
                >
                    <Frame
                        width={"auto"}
                        height={18}
                        style={styleTitle}
                        background={null}
                    >
                        {props.strTitle}
                    </Frame>
                    <Frame
                        width={"auto"}
                        height={18}
                        style={styleSubtitle}
                        background={null}
                    >
                        {props.strSubtitle}
                    </Frame>
                </Stack>
            </Stack>
        </Frame>
    )
}

// Styles
const styleTitle = {
    fontSize: 15,
    color: "#111",
    fontWeight: 600,
    letterSpacing: -0.22,
    fontFamily: "Open Sans",
}

const styleSubtitle = {
    fontSize: 13,
    color: "#A6AFB9",
    fontWeight: 400,
    fontFamily: "Open Sans",
}

// This determines the size of your component when you drag it onto the canvas
ActionRow.defaultProps = {
    width: 375,
    height: 72,
}

// Property controls let you adjust anything you'd like. Note the name and reuse above in the function (i.e. {props.iconColor})
addPropertyControls(ActionRow, {
    // Change the icon
    iconChoice: {
        type: ControlType.Enum,
        title: "Icon",
        defaultValue: "a",
        options: ["a", "b"],
        optionTitles: ["School", "Parents"],
    },

    // Change the color of the icon container
    iconColor: {
        type: ControlType.Color,
        defaultValue: "#0055FF",
        title: "Icon Colour",
    },

    // Change the colour of the row
    rowColor: {
        type: ControlType.Color,
        defaultValue: "white",
        title: "Row Colour",
    },

    // Change the title
    strTitle: {
        type: ControlType.String,
        defaultValue: "Title",
        title: "Title",
    },

    // Change the title
    strSubtitle: {
        type: ControlType.String,
        defaultValue: "Subtitle",
        title: "Subtitle",
    },

    // Change the notification Number
    strNotifNo: {
        type: ControlType.String,
        defaultValue: "2",
        title: "Number of Notifications",
    },

    //Show Notification
    showNotification: {
        type: ControlType.Color,
        defaultValue: "red",
        title: "Notification Colour",
    },
})
