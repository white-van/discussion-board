import React from "react";

import Home, { cards } from "../../pages";
import { renderWrapped } from "../helpers";

describe("HomePage", () => {
  it("Renders each card", () => {
    const { getByText } = renderWrapped(<Home />);
    cards.forEach((card) => {
      expect(getByText(card.msg)).toBeInTheDocument();
    });
  });
});
