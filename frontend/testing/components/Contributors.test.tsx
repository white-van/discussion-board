/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { act, waitFor } from "@testing-library/react";
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
    let component;
    await act(async () => {
      component = renderWrapped(<Contributors />);
      await waitFor(() =>
        expect(component.queryByText("@jcserv")).toBeInTheDocument()
      );
    });
    const { container } = component;
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("Basic render functionality", async () => {
    let component;
    await act(async () => {
      component = renderWrapped(<Contributors />);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      await waitFor(() =>
        expect(component.queryByText("@jcserv")).toBeInTheDocument()
      );
    });
    const { queryByText } = component;
    expect(queryByText(locales.en.contributorsHeading)).toBeInTheDocument();
  });

  it("Calls retrieveContributors on mount", async () => {
    await act(async () => {
      const component = renderWrapped(<Contributors />);
      await waitFor(() =>
        expect(component.queryByText("@jcserv")).toBeInTheDocument()
      );
    });
    expect(getContributors).toHaveBeenCalledWith();
  });
});
