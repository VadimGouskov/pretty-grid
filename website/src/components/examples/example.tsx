import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Box, Code, Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
    setup: (p5: p5Types, canvasParentRef: Element) => void
    draw: (p5: p5Types) => void
    title: string;
    text?: string;
    code?: string;
}

export const Example: React.FC<Props> = (props) => {


    // //See annotations in JS for more information
    // const setup = (p5: p5Types, canvasParentRef: Element) => {
    //     p5.createCanvas(500, 500).parent(canvasParentRef);
    // };

    // const draw = (p5: p5Types) => {
    //     p5.background(0);
    //     p5.ellipse(x, y, 70, 70);
    //     x++;
    // };


    return (
        <Stack direction={{ base: "column-reverse", md: "row" }}>
            <Box>
                <Sketch setup={props.setup} draw={props.draw} />
            </Box>
            <Box>
                <Heading>
                    {props.title}
                </Heading>
                {props.code && (
                    <Code>
                        <pre >
                            {props.code}
                        </pre>
                    </Code>)}
            </Box>
        </Stack>);
};