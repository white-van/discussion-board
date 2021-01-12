import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderResult } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";
import React from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { locales } from "../content/locale";
import configureStore from "../stores/store";

const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

export const wrapInIntl = (component: React.ReactNode): React.ReactNode => (
  <IntlProvider locale="en" defaultLocale="en" messages={locales["en"]}>
    {component}
  </IntlProvider>
);

export const wrapInRouter = (component: React.ReactNode): JSX.Element => {
  return (
    <RouterContext.Provider value={{ ...mockRouter }}>
      {component}
    </RouterContext.Provider>
  );
};

export const wrapInStore = (component: React.ReactNode): React.ReactNode => {
  const store = configureStore({ mocks: {} });
  return <Provider store={store}>{component}</Provider>;
};

export const wrapInTheme = (component: React.ReactNode): React.ReactNode => {
  return <ChakraProvider>{component}</ChakraProvider>;
};

export const renderWrapped = (component: React.ReactNode): RenderResult => {
  return render(wrapInRouter(wrapInTheme(wrapInIntl(wrapInStore(component)))));
};

function defineMatchMedia(): void {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

export function setupTests(): void {
  defineMatchMedia();
}
