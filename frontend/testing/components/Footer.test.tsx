import { render } from "@testing-library/react";
import React from "react";

import { Footer } from "../../components/Footer";

describe("Footer", () => {
  it("Basic render functionality", () => {
    const { queryByText } = render(<Footer />);
    expect(queryByText("Hello")).toBeInTheDocument();
  });
});
