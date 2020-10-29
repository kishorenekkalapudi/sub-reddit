import React, { Fragment, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../postComment.module.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import moment from "moment";

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
export function replieComments(children) {
  if (children) {
    return children?.map((comment) => {
      if (comment.kind === "more") {
        return;
      } else
        return (
          <div key={comment.data.created_utc} className={styles.postWrapper}>
            <div className={styles.voting}>
              <div>
                <ArrowUpwardIcon style={{ height: ".5em" }} />
                <div>{comment.data.vote}</div>
                <ArrowDownwardIcon style={{ height: ".5em" }} />
              </div>
              <i className={styles.threadline}></i>
            </div>
            <div className={styles.content}>
              <div
                style={{ paddingLeft: "20px" }}
                className={styles.replieComments}
                color="textSecondary"
              >
                <div>
                  {comment.data.author} {comment.data.score} points{" "}
                  {moment.unix(comment.data.created_utc).utc().fromNow()}
                </div>
                {comment.data.body}

                {replieComments(comment.data.replies?.data?.children)}
              </div>
            </div>
          </div>
        );
    });
  } else {
    return;
  }
}

const PostComments = ({ children }) => {
  const classes = useStyles();
  const comments = replieComments(children);
  return (
    <Card
      style={{
        margin: "20px",
        border: "1px solid #ccc",
        paddingTop: "10px",
      }}
      className={classes.root}
    >
      <div className={styles.comments}>Comments</div>
      {comments}
    </Card>
  );
};

export default PostComments;
