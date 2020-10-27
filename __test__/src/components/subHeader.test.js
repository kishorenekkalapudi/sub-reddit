import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../test-utils";
import SubHeader from "../../../src/components/subHeader";

const about = {
  src:
    "https://styles.redditmedia.com/t5_2tk95/styles/communityIcon_hrq90p2z27k11.jpg?width=256&format=pjpg&s=adbf89b8f1cd7c19f29cfc9b3680c6eb35542a9d",
  display_name: "nextjs",
  display_name_prefixed: "r/nextjs",
};

describe("Sub header", () => {
  it("should render the header", () => {
    render(<SubHeader about />);

    const heading = screen(/nextjs/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
