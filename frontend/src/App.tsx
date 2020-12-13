import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ConnectedRouter } from "connected-react-router";
import { Provider as ReduxProvider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import configureStore, { history } from "./stores/store";
import Root from "./pages/Root";

const store = configureStore({});

function UnconnectedApp() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </>
  );
}

function ConnectedApp() {
  return (
    <ChakraProvider>
      <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <UnconnectedApp />
        </ConnectedRouter>
      </ReduxProvider>
    </ChakraProvider>
  );
}

export default ConnectedApp;
