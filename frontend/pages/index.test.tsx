import React from "react";

import { renderWrapped } from "../testing/helpers";
import Home, { cards } from "./";

describe("HomePage", () => {
  it("Renders each card", () => {
    const { getByText } = renderWrapped(<Home />);
    cards.forEach((card) => {
      expect(getByText(card.msg)).toBeInTheDocument();
    });
  });
});
