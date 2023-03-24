import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

type Props = {
    img: string;
    title: string;
    text?: string
}

export const Feature: React.FC<Props> = (props) => {
    return <Stack spacing={"16px"}>
        <Box backgroundColor={"#fff"} padding={"16px 0"} borderRadius="5%">
            <img style={{ maxWidth: "100%", height: "200px", margin: "0 auto" }} src={props.img}></img>
        </Box>
        <Heading as={"h2"} size="sm" textAlign="center">{props.title}</Heading>
        <Text>{props.text}</Text>
    </Stack>
}