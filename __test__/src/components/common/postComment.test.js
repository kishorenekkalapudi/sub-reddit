import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../../test-utils";
import PostComment from "../../../../src/components/common/postComment";
import { data } from "../../../data/postComments";

describe("Sub header", () => {
  it("should render the  sub header", () => {
    render(<PostComment children={data} />);
    //screen.debug();

    const des = screen.getByText("maybe cloudinary its an option");

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(des).toBeInTheDocument();
  });
});
