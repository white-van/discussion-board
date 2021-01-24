/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

import { Contributors } from "../../components/Contributors";
import { locales } from "../../content/locale";
import { getContributors } from "../../requests/github";
import { renderWrapped, setupTests } from "../helpers";
import { mockContributors } from "../mockData";

jest.mock("../../requests/github");
const mockedGetContributors = getContributors as jest.Mock<any>;
setupTests();

describe("Contributors", () => {
  beforeEach(() => {
    mockedGetContributors.mockImplementationOnce(() =>
      Promise.resolve(mockContributors)
    );
  });

  afterEach(() => {
    mockedGetContributors.mockReset();
  });

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

  it("Calls retrieveContributors on mount", () => {
    renderWrapped(<Contributors />);
    expect(getContributors).toHaveBeenCalledWith();
  });

  // mock contributors and see that it renders each one
});
