/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { connect } from "react-redux";

import { FeaturesList } from "../components/FeaturesList";
import { HeroSection } from "../components/HeroSection";

import { displaySuccessSnack } from "../stores/uiSlice/actions";
import styles from "../styles/Home.module.css";

export function Home({ displaySuccessSnack }): JSX.Element {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesList />
      <button onClick={() => displaySuccessSnack("hey lol")}>Click me</button>
    </div>
  );
}

export default connect(null, {
  displaySuccessSnack,
})(Home);
