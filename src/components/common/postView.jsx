
import React, { Fragment,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import styles from '../postview.module.scss'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
var moment = require('moment');





const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  link:{
    color:'rgba(0, 0, 0, 0.54)',
    textDecoration: 'none'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  responsive: {
    width: '100%',
    height: 'auto',
  }
});

  function createMarkup(markup) {
    return {__html: markup};
  }

export const PostView=({author, permalink, title, selftext_html, url,num_comments,score})=>{
    const classes = useStyles();
    const [vote, setVote]=useState(score)
    return (
    <Card style={{margin:'20px', border:'1px solid #ccc'}} className={classes.root}>
    <div className={styles.postWrapper}>
        <div className={styles.voting}>
            <div >
            <ThumbUpAltIcon  onClick={()=>setVote(vote+1)} />
              <p >{vote}</p>
            <ThumbDownIcon onClick={(e)=>setVote(vote-1)} />
            </div>
            </div>
        <div className={styles.content}>
        <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>

          Posted <a href={`/user/${author}`}> byu/{author}</a>

      </Typography>
      <Typography className={classes.links} color="textSecondary" gutterBottom>
        <a  style={{ color:'rgba(0, 0, 0, 0.54)',
    textDecoration: 'none'}} className={classes.link} href={permalink}>{title}</a>
    </Typography>
    <Typography className={classes.pos} nowrap={true} color="textSecondary" gutterBottom>
    {/* {selftext} */}
    
    <div dangerouslySetInnerHTML={createMarkup(entities.decode(selftext_html))} />
    {url && url.includes('.jpg')?<img className={classes.responsive} src={url}/>:<div/>}
 

    </Typography>
  
    </CardContent>
        </div>
    </div>
 
    <CardActions>
      <Button size="small">Share</Button>
      <ChatBubbleOutlineIcon/> <p>{num_comments} comments</p>
    </CardActions>
  </Card>)
} 
