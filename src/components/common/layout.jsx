import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Nav from '../r/nav'
import About from './about'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Layout = (props) =>{
  console.log(props);
    const classes = useStyles();

return <div className={classes.root}>

<Grid container  sm={12} md={12}>
    <Grid item  md={2}></Grid>
    <Grid item  xs={12} md={6} >
    <Nav />
    </Grid>
    <Grid item  xs={12} md={2} >
        <About {...props}/>
    </Grid>
    <Grid item  md={1}></Grid>

</Grid>
</div>
}
export default Layout;