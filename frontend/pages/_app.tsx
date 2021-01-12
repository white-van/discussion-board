import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { locales } from "../content/locale";
import configureStore from "../stores/store";
import theme from "../theme";

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
}: PageWrapperProps) => {
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

const messagesMap: { [pathname: string]: string } = {
  "/": "Homepage",
};

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const store = configureStore(pageProps.initialReduxState);
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const messages = locales[locale];
  return (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    <ChakraProvider theme={theme}>
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
