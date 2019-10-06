import * as React from "react"
import { Frame, useAnimation } from "framer"
import { Keyboard, Messages_AbsenseCreate, Design_MenuPanel } from "./canvas"
import { Input } from "./MessageInput"

export function MessageScreen() {
    const controls = useAnimation()

    function animateIn() {
        controls.start({ y: -310 })
    }

    function animateOut() {
        controls.start({ y: 0 })
    }

    return (
        <Frame width={375} height={812} background={"null"}>
            <Frame
                animate={controls}
                transition={{ ease: "easeOut", duration: 0.2 }}
            >
                <Messages_AbsenseCreate />
                <Frame
                    top={630}
                    left={32}
                    background={""}
                    onTap={animateIn}
                    onBlur={animateOut}
                >
                    <Input />
                </Frame>
            </Frame>

            <Frame bottom={-77} background={""}>
                <Design_MenuPanel />
            </Frame>
        </Frame>
    )
}
