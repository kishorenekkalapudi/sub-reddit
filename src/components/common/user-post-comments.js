import React, { Fragment } from "react";
import { PostView } from "./post-view";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import moment from "moment";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
import styles from "../comment.module.scss";

function mapData(posts) {
  const PostData = {};
  const dataOrder = new Set();

  posts.forEach((post) => {
    if (post.kind === "t3") {
      PostData[`t3_${post.data.id}`] = post;
      dataOrder.add(`t3_${post.data.id}`);
    } else {
      dataOrder.add(post.data.link_id);
    }
  });
  posts.forEach((post) => {
    if (post.kind === "t1") {
      if (PostData[post.data.link_id]) {
        if (!PostData[post.data.link_id]["comments"])
          PostData[post.data.link_id]["comments"] = [];
        PostData[post.data.link_id]["comments"].push(post);
      } else {
        PostData[`${post.data.link_id}`] = post;
      }
    }
  });

  return [PostData, [...dataOrder]];
}

function renderpost(PostData, dataOrder) {
  const html = [...dataOrder].map((post) => {
    if (PostData[post].kind === "t3") {
      if (PostData[post].comments) {
        const comments = PostData[post].comments.map((comment) => {
          return (
            <Card
              style={{
                margin: "20px",
                border: "1px solid #ccc",
              }}
              className={styles.root}
            >
              {UserPostCommentView(comment)}{" "}
            </Card>
          );
        });

        return (
          <div>
            {" "}
            <PostView
              userCommentElement={comments}
              key={post}
              {...PostData[post].data}
            />
          </div>
        );
      }
      return <PostView key={post} {...PostData[post].data} />;
    } else {
      return UserCommentView(PostData[post]);
    }
  });
  return html;
}

const PNC = ({ posts }) => {
  console.log(JSON.stringify(posts, null, 4));
  const [PostData, dataOrder] = mapData(posts);
  const html = renderpost(PostData, dataOrder);

  return <Fragment>{html}</Fragment>;
};

export default PNC;

function createMarkup(markup) {
  markup = markup.replace("<!-- SC_OFF -->", "");
  markup = markup.replace("<!-- SC_ON -->", "");
  return { __html: markup };
}

function UserCommentView({ data }) {
  return (
    <Card
      style={{ margin: "20px", border: "1px solid #ccc" }}
      className={styles.root}
    >
      <div className={styles.post}>
        <ChatBubbleIcon style={{ verticalAlign: "middle" }} />
        <a href={`/user/${data.author}`}> {data.author}</a>
        {" commented on  "} {data.link_title}
        posted by {data.link_author}
      </div>
      {getCommentView(data)}
    </Card>
  );
}
function UserPostCommentView({ data }) {
  return (
    <Card
      style={{ margin: "20px", border: "1px solid #ccc" }}
      className={styles.root}
    >
      {getCommentView(data)}
    </Card>
  );
}

function getCommentView(data) {
  return (
    <div className={styles.comments}>
      {data.author} {data.score} point .{" "}
      {moment.unix(data.created_utc).utc().fromNow()}
      <span
        dangerouslySetInnerHTML={createMarkup(entities.decode(data.body_html))}
      />
    </div>
  );
}
