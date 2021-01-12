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
