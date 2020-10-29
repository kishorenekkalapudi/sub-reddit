import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { PostView } from "../common/post-view";
import PostComments from "../common/post-comment";
import Header from "../common/header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Grid container xs={12} md={12}>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={6}>
          <PostView {...props[0].data.children[0].data} />
          <PostComments {...props[1].data} />
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </div>
  );
};
export default Layout;
