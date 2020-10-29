import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import styles from "../postview.module.scss";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 320,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  link: {
    color: "rgba(0, 0, 0, 0.54)",
    textDecoration: "none",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  responsive: {
    width: "100%",
    height: "auto",
  },
});

function createMarkup(markup) {
  markup = markup.replace("<!-- SC_OFF -->", "");
  markup = markup.replace("<!-- SC_ON -->", "");
  return { __html: markup };
}
export function getElememt(url, classes) {
  return url && url.includes(".jpg") ? (
    <img style={{ width: "100%", height: "auto" }} src={url} />
  ) : (
    <div />
  );
}

export const PostView = ({
  author,
  permalink,
  title,
  selftext_html,
  url,
  num_comments,
  score,
  created_utc,
  userCommentElement,
}) => {
  const classes = useStyles();
  const [vote, setVote] = useState(score);
  return (
    <Card
      style={{ margin: "20px 0 0 0", border: "1px solid #ccc" }}
      className={classes.root}
    >
      <div className={styles.postWrapper}>
        <div className={styles.voting}>
          <div>
            <ThumbUpAltIcon
              data-testid="up-arrow"
              onClick={() => setVote(vote + 1)}
            />
            <p>{vote}</p>
            <ThumbDownIcon
              data-testid="down-arrow"
              onClick={(e) => setVote(vote - 1)}
            />
          </div>
        </div>
        <div className={styles.content}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Posted <a href={`/user/${author}`}> byu/{author}</a>{" "}
              {moment.unix(created_utc).utc().fromNow()}
            </Typography>
            <Typography
              className={classes.links}
              color="textSecondary"
              gutterBottom
            >
              <a
                style={{ color: "rgba(0, 0, 0, 0.54)", textDecoration: "none" }}
                className={classes.link}
                href={permalink}
              >
                {title}
              </a>
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
              gutterBottom
            >
              {/* {selftext} */}

              <span
                dangerouslySetInnerHTML={createMarkup(
                  entities.decode(selftext_html)
                )}
              />
              {getElememt(url, classes)}
            </Typography>
          </CardContent>
        </div>
      </div>

      <CardActions>
        <Button size="small">Share</Button>
        <ChatBubbleOutlineIcon /> <p>{num_comments} comments</p>
      </CardActions>
      {userCommentElement}
    </Card>
  );
};
