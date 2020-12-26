import { Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
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

export default function Home(): React.ReactNode {
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
    </>
  );
}
