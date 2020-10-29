import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../../test-utils";
import AboutUser from "../../../../src/components/common/about-user";

const about = {
  public_description: "nextjs",
  subscribers: 19000,
  active_user_count: 1300,
};

describe("Sub header", () => {
  it("should render the  sub header", () => {
    render(<AboutUser about={about} />);
    //screen.debug();

    const des = screen.getByText("nextjs");
    const subs = screen.getByText(/19K/i);
    const activeSub = screen.getByText(/1.3k/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(des).toBeInTheDocument();
    expect(subs).toBeInTheDocument();
    expect(activeSub).toBeInTheDocument();
  });
});
