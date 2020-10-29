import React from "react";
import { render, screen } from "../../../test-utils";

import PNC from "../../../../src/components/common/user-post-comments";

import { data } from "../../../data/user-post-data";

describe("User post and comments ", () => {
  it("should render the User post and comments", () => {
    render(<PNC posts={data} />);

    const heading = screen.getByText(/Not sure we do that in Europe/i, {
      exact: false,
    });
    expect(heading).toBeInTheDocument();
  });
});
