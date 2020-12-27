/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BiPalette } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { ImWrench } from "react-icons/im";
import { IoAccessibility } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";
import { RiOpenSourceFill } from "react-icons/ri";
import { defineMessages, useIntl } from "react-intl";

import { FeatureCard } from "../components/FeatureCard/FeatureCard";
import styles from "../styles/Home.module.css";

const messages = defineMessages({
  hello: {
    id: "hello",
    description: "Simple Hello Message",
    defaultMessage: "Hello World",
  },
  welcomeMessage: {
    id: "welcomeMessage",
    description: "Welcome Message",
    defaultMessage: "Welcome",
  },
});

export default function Home(): React.ReactNode {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const { locale, locales, defaultLocale } = router;

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" size="2xl" mb="2">
        Welcome to{" "}
        <Link
          color="teal.500"
          href="https://github.com/white-van/discussion-board"
        >
          Dialog!
        </Link>
      </Heading>
      <p>{f("hello")}</p>
      <p>{f("welcomeMessage")}</p>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <main className={styles.main}>
        <Box bg="brand.100" w="100%" h="100%" p={10}>
          <Text fontSize="3xl" align="center" color="white" fontWeight="bold">
            {f("featuresTitle")}
          </Text>
          <br></br>
          <br></br>
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={14}>
            <FeatureCard
              title={f("feature1")}
              description={f("feature1msg")}
              icon={BiPalette}
            />

            <FeatureCard
              title={f("feature2")}
              description={f("feature2msg")}
              icon={ImWrench}
            />

            <FeatureCard
              title={f("feature3")}
              description={f("feature3msg")}
              icon={FaUniversity}
            />

            <FeatureCard
              title={f("feature4")}
              description={f("feature4msg")}
              icon={IoAccessibility}
            />

            <FeatureCard
              title={f("feature5")}
              description={f("feature5msg")}
              icon={RiCodeSSlashLine}
            />

            <FeatureCard
              title={f("feature6")}
              description={f("feature6msg")}
              icon={RiOpenSourceFill}
            />
          </SimpleGrid>
        </Box>
      </main>

      <div className={styles.grid}>
        <a
          href="https://github.com/white-van/discussion-board"
          className={styles.card}
        >
          <h3>Contribute &rarr;</h3>
          <p>View the project directory here.</p>
        </a>

        <a
          href="https://docs.google.com/document/d/1wARWeLMthuZG_HX8N8bkGDzzljB8jNmCZY375sjEOnk/edit"
          className={styles.card}
        >
          <h3>Learn &rarr;</h3>
          <p>Learn about Dialog here!</p>
        </a>

        <a href="https://chakra-ui.com/" className={styles.card}>
          <h3>Chakra-UI &rarr;</h3>
          <p>Discover Chakra-UI, the beautiful CSS framework we use.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  );
}
