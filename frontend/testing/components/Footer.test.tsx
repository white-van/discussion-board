import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import { Footer } from "../../components/Footer";

describe("Footer", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Basic render functionality", () => {
    const { queryByText } = render(<Footer />);
    expect(queryByText("Hello")).toBeInTheDocument();
  });
});
