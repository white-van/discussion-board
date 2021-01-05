import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import { Navbar } from "../../components/Navbar";

describe("Navbar", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Renders a signup button", () => {
    const { queryByText } = render(<Navbar />);
    expect(queryByText("Sign Up")).toBeInTheDocument();
  });
});
