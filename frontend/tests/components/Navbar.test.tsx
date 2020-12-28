import { render } from "@testing-library/react";
import React from "react";

import { Navbar } from "../../components/Navbar";

describe("Navbar", () => {
  it("Renders a signup button", () => {
    const { queryByText } = render(<Navbar />);
    expect(queryByText("Sign Up")).toBeInTheDocument();
  });
});
