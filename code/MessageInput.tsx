import * as React from "react"
import { colors } from "./canvas"
import { Frame, useAnimation } from "framer"
import { SendIcon } from "./SendIcon"

export function Input(props) {
    const controls = useAnimation()

    function animateIn() {
        controls.start({ backgroundColor: "rgba(255,255,255,0.1" })
    }

    function animateOut() {
        controls.start({ backgroundColor: "rgba(255,255,255,0" })
    }

    return (
        <Frame
            background={""}
            animate={controls}
            onFocus={animateIn}
            onBlur={animateOut}
            width={props.width}
            height={props.height}
            borderRadius={20}
        >
            <input placeholder="Send a message " style={inputStyle} />
            <Frame top={16} left={280} background={""}>
                <SendIcon />
            </Frame>
        </Frame>
    )
}

const inputStyle = {
    width: 320,
    height: 56,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray",
    background: "white",
    color: "black",
    fontSize: 18,
    paddingLeft: 32,
}

Input.defaultProps = {
    width: 320,
    height: 56,
}
