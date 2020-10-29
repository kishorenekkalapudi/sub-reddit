import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
import PNC from "../common/user-post-comments";

import { PostView } from "../common/post-view";

export default function Post({ path, sort }) {
  const router = useRouter();
  const { id } = router?.query;

  if (path) {
    path = sort ? `${path}.json?sort=${sort}` : `${path}.json`;
  } else {
    path = `/r/${id}`;
    path = sort ? `${path}/${sort}.json` : `${path}.json`;
  }

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
      {path.includes("/user/") ? (
        <PNC posts={posts} />
      ) : (
        posts.map((post) => {
          return <PostView key={post.data.link_permalink} {...post.data} />;
        })
      )}
    </Fragment>
  );
}
