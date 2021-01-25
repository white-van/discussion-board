import React from "react";
import { useDispatch } from "react-redux";

import { HeroSection } from "../components/HeroSection";
import { displaySuccessSnack } from "../stores/uiSlice/actions";

export function Home(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <>
      <HeroSection />
      <button onClick={() => dispatch(displaySuccessSnack("hi lol"))}>
        Click me
      </button>
    </>
  );
}

export default Home;
