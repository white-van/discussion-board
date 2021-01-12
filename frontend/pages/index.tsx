/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react";

import { FeaturesList } from "../components/FeaturesList";
import { HeroSection } from "../components/HeroSection";
import styles from "../styles/Home.module.css";

export default function Home(): React.ReactNode {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesList />
    </div>
  );
}
