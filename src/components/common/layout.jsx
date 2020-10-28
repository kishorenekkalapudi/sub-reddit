import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../r/nav";
import About from "./about";
import Header from "../header";
import SubHeader from "../subHeader";
import AboutUser from "./aboutUser";

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
  console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {props.type === "user" ? <Fragment></Fragment> : <SubHeader {...props} />}

      <Grid container xs={12} md={12}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={6}>
          <Nav path={props.path} />
        </Grid>
        <Grid item xs={12} md={2}>
          {props.type === "user" ? (
            <AboutUser {...props} />
          ) : (
            <About {...props} />
          )}
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </div>
  );
};
export default Layout;
