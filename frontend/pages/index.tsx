import React from "react";
import { useDispatch } from "react-redux";

import { FeaturesList } from "../components/FeaturesList";
import { HeroSection } from "../components/HeroSection";
import { displaySuccessSnack } from "../stores/uiSlice/actions";

export function Home(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <>
      <HeroSection />
      <FeaturesList />
      <button onClick={() => dispatch(displaySuccessSnack("hi lol"))}>
        Click me
      </button>
    </>
  );
}

export default Home;
