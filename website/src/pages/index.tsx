import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Alert, border, Box, ChakraProvider, Container, Heading, Highlight, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from '@docusaurus/Link'



import styles from './index.module.css';
import Head from '@docusaurus/Head';
import { Button, Spinner } from '@chakra-ui/react';
import { useFeatures } from '@site/src/hooks/features';
import { Feature } from '@site/src/components/features/feature';
import { Example } from '../components/examples/example';
import { useExamples } from '../hooks/examples/examples';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Box marginBottom={"32px"}>
          <Heading as={"h1"} size="2xl" marginBottom={2}>{siteConfig.title}</Heading>
          <Heading as={"h2"} size={"md"}>{siteConfig.tagline}</Heading>
        </Box>


        <Link
          className="button button--secondary button--lg"
          to="/docs/intro">
          Documentation
        </Link>
        <Link
          className="button button--secondary button--lg"
          style={{ backgroundColor: "transparent", marginLeft: "10px", outline: "1px solid white", color: "white" }}
          to="#examples">
          Examples
        </Link>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const features = useFeatures();
  const examples = useExamples();
  return (
    <ChakraProvider>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <Head>
          <script defer src="/_vercel/insights/script.js"></script>
        </Head>
        <HomepageHeader />

        <Container padding={"64px 0"}>
          <Heading>Why Pretty Grid ?</Heading>
          <Text>
            Creating 2D or 3D grids involves a lot of boiler plate code.
            Especially if you want to select or manipulate different areas across your grid.
            <br /> <br />
            Pretty-Grid let's you define a 2D or 3D grid in a single line of code.<br />Additionally, Pretty-grid provides
            numerous helper methods to make complex point selections and transformations across multiple grids a breeze.
          </Text>
        </Container>

        <Box width={{ base: '100%', md: '80ch' }} margin={"16px auto"}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={16}>
            {features.map(({ img, title }) => < Feature img={img} title={title}></Feature>)}
          </SimpleGrid>
        </Box>

        <Container paddingTop={"128px"} id="examples">
          <Heading>Examples</Heading>

          <Text>
            The examples below illustrate some basic capabilities of <code>pretty-grid</code>. If you want to learn more, check out the documentation section.
            <br /><br />
            <Alert status='info'>
              <Box>
                These examples use the powerful <strong><ChakraLink display={"inline"} padding={0} margin={0} href='https://p5js.org/'>p5.js library</ChakraLink > </strong> to draw to the html canvas. For brevity, the examples include the <code>pretty-grid</code> code only .
              </Box>
            </Alert>

          </Text>
        </Container>

        <Box maxWidth={1200} margin={"64px auto"}>
          <Stack spacing={"64px"}>
            {examples.map(({ title, setup, draw, code }) => <Example title={title} setup={setup} draw={draw} code={code} />
            )}
          </Stack>
        </Box>

      </Layout>
    </ChakraProvider >

  );
}
