import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"
import { Icon_School, Icon_Newspaper, Icon_Student } from "./canvas"

export function DiaryCard(props) {
    return (
        <Stack
            name={"DairyCard"}
            direction={"horizontal"}
            distribution={"start"}
            alignment={"start"}
            gap={24}
            padding={16}
            background={"white"}
            width={327}
            height={116}
            borderRadius={12}
        >
            <Frame
                name={"Left Icon"}
                size={32}
                background={"black"}
                borderRadius={4}
            ></Frame>
            <Stack
                name={"CardInfo"}
                direction={"vertical"}
                width={"1fr"}
                height={"100"}
                distribution={"start"}
                alignment={"start"}
                gap={2}
                paddingTop={10}
            >
                <Frame
                    name={"Title"}
                    height={24}
                    width={"auto"}
                    background={null}
                    style={styleTitle}
                >
                    Title
                </Frame>
                <Frame
                    name={"Subtitle"}
                    height={"100%"}
                    width={"auto"}
                    background={null}
                    style={styleSubtitle}
                >
                    Subtitle
                </Frame>
            </Stack>
            <Frame
                name={"calendarIcon"}
                size={24}
                background={"black"}
                top={4}
                borderRadius={4}
            />
        </Stack>
    )
}
const styleTitle = {
    fontSize: 16,
    color: "black",
    fontWeight: 700,
}

const styleSubtitle = {
    fontSize: 15,
    color: "#64666D",
    fontWeight: 500,
    lineHeight: 1.5,
}

addPropertyControls(DiaryCard, {
    title: {
        type: ControlType.String,
        defaultValue: "Title",
        title: "Title",
    },

    subtitle: {
        type: ControlType.String,
        defaultValue: "Subtitle",
        title: "Subtitle",
    },
})
