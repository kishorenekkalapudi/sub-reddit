import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../../test-utils";
import { PostView } from "../../../../src/components/common/post-view";

const data = {
  author: "audrician25ss",
  permalink: "/r/javascript/comments/jjpoqf/simplest_js_paint/",
  title: "Simplest JS paint",
  selftext_html: null,
  url: "https://hinty.io/devforth/simplest-js-paint/",
  num_comments: 5,
  score: 144,
  created_utc: 1603898331,
};

describe("Sub header", () => {
  it("should render the  sub header", () => {
    render(<PostView {...data} />);
    //screen.debug();

    const votes = screen.getByText("144");
    const user = screen.getByText(/audrician25ss/i);
    const time = screen.getByText(/12 hours ago/i);
    const title = screen.getByText(/Simplest JS paint/i);

    const comments = screen.getByText(/5 comments/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(votes).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(comments).toBeInTheDocument();
  });
});
