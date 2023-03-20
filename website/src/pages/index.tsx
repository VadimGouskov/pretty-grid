import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Box, ChakraProvider, Container, Heading, Highlight, SimpleGrid, Stack, Text } from '@chakra-ui/react'


import styles from './index.module.css';
import Head from '@docusaurus/Head';
import { Button, Spinner } from '@chakra-ui/react';
import { useHomepageFeatures } from '@site/src/hooks/homepage-features';
import { Feature } from '@site/src/components/features/feature';
import { Example } from '../components/examples/example';
import { useExamples } from '../hooks/examples/examples';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Box marginBottom={"16px"}>
          <Heading as={"h1"}>{siteConfig.title}</Heading>
          <Heading as={"h2"} size={"md"}>{siteConfig.tagline}</Heading>
        </Box>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const features = useHomepageFeatures();
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

        <Container padding={"32px 0"}>
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


        <Stack spacing={"32px"}>
          {examples.map(({ title, setup, draw, code }) => <Example title={title} setup={setup} draw={draw} code={code} />
          )}
        </Stack>

      </Layout>
    </ChakraProvider >

  );
}
