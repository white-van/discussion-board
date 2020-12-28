import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";

import { wrapInAll } from "../helpers";
import Home, { cards } from "./";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("HomePage", () => {
  it("Renders each card", () => {
    const { getByText } = render(wrapInAll(<Home />));
    cards.forEach((card) => {
      expect(getByText(card.msg)).toBeInTheDocument();
    });
  });
});
