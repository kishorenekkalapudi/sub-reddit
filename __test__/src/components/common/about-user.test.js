import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../../test-utils";
import AboutUser from "../../../../src/components/common/about-user";
import { data } from "../../../data/user-data";

describe("Sub header", () => {
  it("should render the  sub header", () => {
    render(<AboutUser about={data} />);
    //screen.debug();

    const des = screen.getByText("jasiad");
    const subs = screen.getByText(/32135/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(des).toBeInTheDocument();
    expect(subs).toBeInTheDocument();
  });
});
