import React, { Fragment, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../postComment.module.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const replieComments = (children) => {
  const classes = useStyles();

  // let content;
  if (children) {
    console.log(children);
    return children?.map((comment) => (
      <div key={comment.created_utc} className={styles.postWrapper}>
        <div className={styles.voting}>
          <div>
            <ArrowUpwardIcon style={{ height: ".5em" }} />
            <div>{comment.vote}</div>
            <ArrowDownwardIcon style={{ height: ".5em" }} />
          </div>
          <i className={styles.threadline}></i>
        </div>
        <div className={styles.content}>
          <div
            style={{ paddingLeft: "20px" }}
            className={styles.replieComments}
            color="textSecondary"
            gutterBottom
          >
            <div>
              {comment.data.author} {comment.data.score} points{" "}
            </div>
            {comment.data.body}

            {replieComments(
              comment.data.replies && comment.data.replies.data.children
            )}
          </div>
        </div>
      </div>
    ));
  } else {
    return;
  }
};

export const PostComments = ({ children }) => {
  console.log(JSON.stringify(children, null, 4));

  const classes = useStyles();
  const comments = replieComments(children);
  return (
    <Card
      style={{
        margin: "20px",
        border: "1px solid #ccc",
        paddingTop: "10px",
        minWidth: "280px",
      }}
      className={classes.root}
    >
      <div className={styles.comments}>Comments</div>
      {comments}
    </Card>
  );
};
