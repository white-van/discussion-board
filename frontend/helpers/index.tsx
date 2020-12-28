/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { locales } from "../content/locale";
import configureStore from "../stores/store";

export const wrapInIntl = (component: React.ReactNode) => (
  <IntlProvider locale="en" defaultLocale="en" messages={locales["en"]}>
    {component}
  </IntlProvider>
);

export const wrapInStore = (component: React.ReactNode) => {
  const store = configureStore({ mocks: {} });
  return <Provider store={store}>{component}</Provider>;
};

export const wrapInTheme = (component: React.ReactNode) => {
  return <ChakraProvider>{component}</ChakraProvider>;
};

export const wrapInAll = (component: React.ReactNode) => {
  return wrapInTheme(wrapInIntl(wrapInStore(component)));
};
