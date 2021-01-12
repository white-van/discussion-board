import React from "react";

import { Contributors } from "../components/Contributors";
import { HeroSection } from "../components/HeroSection";

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <Contributors />
    </>
  );
}
