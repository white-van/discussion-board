import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { defineMessages, useIntl } from "react-intl";

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

export const cards = [
  {
    url: "https://github.com/white-van/discussion-board",
    title: "Contribute",
    msg: "View the project directory here.",
  },
  {
    url:
      "https://docs.google.com/document/d/1wARWeLMthuZG_HX8N8bkGDzzljB8jNmCZY375sjEOnk/edit",
    title: "Learn",
    msg: "Learn about Dialog here!",
  },
  {
    url: "https://chakra-ui.com/",
    title: "Chakra-UI",
    msg: "Discover Chakra-UI, the beautiful CSS framework we use.",
  },
  {
    url:
      "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    msg: "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export interface CardProps {
  url: string;
  title: string;
  msg: string;
}

export const Card: React.FC<CardProps> = ({ url, title, msg }: CardProps) => {
  return (
    <a href={url} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{msg}</p>
    </a>
  );
};

export default function Home(): JSX.Element {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const { locale, locales, defaultLocale } = router;

  return (
    <>
      <Heading as="h1" size="2xl" mb="2">
        Welcome to{" "}
        <Link
          color="teal.500"
          href="https://github.com/white-van/discussion-board"
        >
          Dialog!
        </Link>
      </Heading>
      <p>{formatMessage(messages.hello)}</p>
      <p>{formatMessage(messages.welcomeMessage)}</p>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <div className={styles.grid}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              url={card.url}
              title={card.title}
              msg={card.msg}
            />
          );
        })}
      </div>

      <Flex direction="column" align="center" width="lg">
        <Heading mb={2} align="center" colorScheme="gray">
          {formatMessage(
            { id: "heroHeading" },
            {
              span: function renderSpan(...parts) {
                return (
                  <Box as="span" color="blue.500">
                    {parts.join("")}
                  </Box>
                );
              },
            }
          )}
        </Heading>
        <Text
          mb={8}
          align="center"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {formatMessage({ id: "heroText" })}
        </Text>
        <Button colorScheme="blue">Get Started</Button>
      </Flex>
    </>
  );
}
