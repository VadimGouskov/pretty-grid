import { Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

type Props = {
    img: string;
    title: string;
    text?: string
}

export const Feature: React.FC<Props> = (props) => {
    return <Stack spacing={"16px"}>
        <img style={{ width: "100%" }} src={props.img}></img>
        <Heading as={"h2"} size="sm">{props.title}</Heading>
        <Text>{props.text}</Text>
    </Stack>
}