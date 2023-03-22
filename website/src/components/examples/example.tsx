import React from "react";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Box, Code, Heading, Stack, Text } from "@chakra-ui/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from "@docusaurus/useIsBrowser";

interface Props {
    setup: (p5: p5Types, canvasParentRef: Element) => void
    draw: (p5: p5Types) => void
    title: string;
    text?: string;
    code?: string;
}

export const Example: React.FC<Props> = (props) => {

    const sectionId = props.title.replace(/ /g, "-")
    const isBrowser = useIsBrowser();

    return (
        <Stack direction={{ base: "column-reverse", md: "row" }} id={sectionId} >
            <Box paddingTop={"2.5rem"}>
                <BrowserOnly fallback={<></>}>
                    {() => {
                        const Sketch = require('react-p5');
                        return <Sketch setup={props.setup} draw={props.draw} />
                    }}
                </BrowserOnly>
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