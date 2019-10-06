import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"

export function Policy(props) {
    return (
        <Stack
            alignment={"start"}
            distribution={"start"}
            background={props.policycolor}
            borderRadius={24}
            height={props.height}
            width={props.width}
            padding={24}
            shadow={"0 4px 20px 0 rgba(0,0,0, 0.25)"}
            whileTap={{ scale: 0.95 }}
        >
            <Frame
                name={"PolicyTitle"}
                height={24}
                width={"1fr"}
                style={stylePolicyTitle}
                background={""}
            >
                {props.policytitle}
            </Frame>

            <Frame
                name={"PolicyDesc"}
                height={"90%"}
                width={"1fr"}
                style={stylePolicyDesc}
                background={""}
            >
                {props.policydesc}
            </Frame>
        </Stack>
    )
}

const stylePolicyTitle = {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "open sans",
    color: "black",
    letterSpacing: -0.2,
    alignment: "start",
    paddingTop: 16,
}

const stylePolicyDesc = {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "open sans",
    color: "gray",
}

Policy.defaultProps = {
    width: 300,
    height: 180,
}

addPropertyControls(Policy, {
    policytitle: {
        type: ControlType.String,
        defaultValue: "Title",
        title: "Policy Name",
    },

    policydesc: {
        type: ControlType.String,
        defaultValue: "Desc",
        title: "Policy Description",
    },

    policycolor: {
        type: ControlType.Color,
        defaultValue: "white",
        title: "Colour",
    },

    titlecolor: {
        type: ControlType.Color,
        defaultValue: "black",
        title: "Header Colour",
    },

    desccolor: {
        type: ControlType.Color,
        defaultValue: "gray",
        title: "Desc Colour",
    },
})

//import { Override } from "framer"

const variants = {
    initial: { scale: 1 },
    tapped: { scale: 0.95 },
}
