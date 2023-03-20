import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Box, Code, Heading, Stack, Text } from "@chakra-ui/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    setup: (p5: p5Types, canvasParentRef: Element) => void
    draw: (p5: p5Types) => void
    title: string;
    text?: string;
    code?: string;
}

export const Example: React.FC<Props> = (props) => {

    const sectionId = props.title.replace(/ /g, "-")
    return (
        <Stack direction={{ base: "column-reverse", md: "row" }} id={sectionId} >
            <Box>
                <Sketch setup={props.setup} draw={props.draw} />
            </Box>
            <Box width="100%" maxWidth="100%">
                <Heading>
                    {props.title}
                </Heading>

                {props.code && (
                    <SyntaxHighlighter language="typescript" style={stackoverflowDark} customStyle={{ width: "100%", maxWidth: "100%" }} wrapLongLines={false} showLineNumbers={true}>
                        {props.code}
                    </SyntaxHighlighter >)}
            </Box>
        </Stack >);
};