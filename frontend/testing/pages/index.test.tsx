import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import Home, { cards } from "../../pages";
import { renderWrapped } from "../helpers";

describe("HomePage", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = renderWrapped(<Home />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Renders each card", () => {
    const { getByText } = renderWrapped(<Home />);
    cards.forEach((card) => {
      expect(getByText(card.msg)).toBeInTheDocument();
    });
  });
});
