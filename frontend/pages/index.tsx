/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { Contributors } from "../components/Contributors";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
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
      <p>{f("hello")}</p>
      <p>{f("welcomeMessage")}</p>
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
      <Contributors />
    </>
  );
}
