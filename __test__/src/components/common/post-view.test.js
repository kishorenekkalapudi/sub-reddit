import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen, fireEvent } from "../../../test-utils";
import {
  PostView,
  getElememt,
} from "../../../../src/components/common/post-view";
import moment from "moment";

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

const timeFromNow = moment.unix(data.created_utc).utc().fromNow();
describe("Post View", () => {
  it("should render the  Post view", () => {
    render(<PostView {...data} />);
    //screen.debug();

    const votes = screen.getByText("144");
    const user = screen.getByText(/audrician25ss/i);
    const time = screen.getByText(timeFromNow, { exact: false });
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
  it("get element fn return img tag ", () => {
    const html = getElememt("https://hinty.io/devforth/simplest-js-paint.jpg");
    expect(html.type).toEqual("img");
  });
  it("get element fn return div tag ", () => {
    const html = getElememt("https://hinty.io/devforth/simplest-js-paint");
    expect(html.type).toEqual("div");
  });
  it("increments like", () => {
    const { getByTestId } = render(<PostView {...data} />);
    fireEvent.click(getByTestId("up-arrow"));
    const like = screen.getByText(/145/i);

    expect(like).toBeInTheDocument();
  });
  it("decerment  like", () => {
    const { getByTestId } = render(<PostView {...data} />);
    fireEvent.click(getByTestId("down-arrow"));
    const like = screen.getByText(/143/i);

    expect(like).toBeInTheDocument();
  });
});
