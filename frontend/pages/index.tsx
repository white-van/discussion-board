/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { connect } from "react-redux";

import { Contributors } from "../components/Contributors";
import { HeroSection } from "../components/HeroSection";
import { displaySuccessSnack } from "../stores/uiSlice/actions";

export function Home({ displaySuccessSnack }): JSX.Element {
  return (
    <>
      <HeroSection />
      <button onClick={() => displaySuccessSnack("hey lol")}>Click me</button>
      <Contributors />
    </>
  );
}

export default connect(null, {
  displaySuccessSnack,
})(Home);
