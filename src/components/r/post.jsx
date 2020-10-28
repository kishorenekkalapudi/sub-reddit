import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();

import { PostView } from "../common/postView";

export default function Post({ path, sort }) {
  const router = useRouter();
  const { id } = router?.query;

  if (path) {
    path = sort ? `${path}.json?sort=${sort}` : `${path}.json`;
  } else {
    path = `/r/${id}`;
    path = sort ? `${path}/${sort}.json` : `${path}.json`;
  }

  console.log(path);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/api${path}`)
      .then((posts) => posts.json())
      .then((posts) => {
        setPosts(posts.data.children);
      });
  }, []);

  return (
    <Fragment>
      {posts.map((post) => {
        console.log(post);

        if (path.includes("/user/")) {
          post.data.url = post.data.link_permalink;
          post.data.title = post.data.link_title;
          post.data.selftext_html = post.data.body_html;
          post.data.url = post.data.link_url;
        }
        return <PostView key={post.data.link_permalink} {...post.data} />;
      })}
    </Fragment>
  );
}
