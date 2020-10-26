import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RedditIcon from '@material-ui/icons/Reddit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth:320

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{minWidth:'320px'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <RedditIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Reddit
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
