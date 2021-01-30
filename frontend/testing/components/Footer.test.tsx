import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import { Footer, footerLinks } from "../../components/Footer";
import { setupTests } from "../helpers";

setupTests();

describe("Footer", () => {
  expect.extend(toHaveNoViolations);
  it("Check axe violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Basic render functionality", () => {
    const { queryByText } = render(<Footer />);
    footerLinks.forEach((link) => {
      expect(queryByText(link)).toBeInTheDocument();
    });
  });
});
