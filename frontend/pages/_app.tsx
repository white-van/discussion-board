// TODO: FIX THESE ESLINT ERROR
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import * as locales from "../content/locale";
import configureStore from "../stores/store";

export const PageWrapper = ({ children, title }) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default function App({ Component, pageProps }) {
  const store = configureStore(pageProps.initialReduxState);
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const messages = locales[locale];

  const messagesMap = {
    "/": "Homepage",
  };
  return (
    <ChakraProvider>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Provider store={store}>
          <PageWrapper title={messagesMap[pathname]}>
            <Component {...pageProps} />
          </PageWrapper>
        </Provider>
      </IntlProvider>
    </ChakraProvider>
  );
}
