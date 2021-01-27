import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import Home from "../../pages";
import { renderWrapped, setupTests } from "../helpers";

setupTests();

describe("HomePage", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = renderWrapped(<Home />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
