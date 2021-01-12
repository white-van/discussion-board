import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";
import { Contributors } from "../../components/Contributors";
import { setupTests } from "../helpers";

setupTests();

describe("Contributors", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = render(<Contributors />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Basic render functionality", () => {
    const { queryByText } = render(<Contributors />);
    expect(queryByText("Hello")).toBeInTheDocument();
  });
});
