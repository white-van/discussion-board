import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import { Contributors } from "../../components/Contributors";
import { locales } from "../../content/locale";
import { renderWrapped, setupTests } from "../helpers";

setupTests();

describe("Contributors", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = renderWrapped(<Contributors />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Basic render functionality", () => {
    const { queryByText } = renderWrapped(<Contributors />);
    expect(queryByText(locales.en.contributorsHeading)).toBeInTheDocument();
  });

  // makes a call to github api on mount
  // mock contributors and see that it renders each one
  // basic render functionality: check that the header renders
});
