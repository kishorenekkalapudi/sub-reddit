import React, { Fragment,useState,useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import styles from '../postComment.module.scss'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';




const useStyles = makeStyles((theme) => ({
    root: {
      minWidth:320,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const  replieComments= (replies) =>{
    const classes = useStyles();

    // let content;
    if(replies){
      console.log(replies);
      return  (
        replies.data.children?.map((comment)=>(
          <div className={styles.postWrapper}>

          <div className={styles.voting}>
          <div >
            <ArrowUpwardIcon style={{height: ".5em"}}  />
            <div >{comment.vote}</div>
            <ArrowDownwardIcon style={{height: ".5em"}} />
            </div>
          <i className={styles.threadline}></i>
            </div>          
          <div className={styles.content}>
          <div style={{paddingLeft:'20px'}} className={styles.replieComments} color="textSecondary" gutterBottom>
              <div>{comment.data.author} {comment.data.score} points </div>
              {comment.data.body}

              {replieComments(comment.data.replies)}

          </div> 
          </div>
        </div>

        ))
  
    )
    }
    else
    {
      return
    }
  }
  

export const PostComments=({children})=>{
    const classes = useStyles();

    const comments=children.map((comment)=>{
      
        return    ( 
          <div className={styles.postWrapper}>
          <div className={styles.voting}>
          <div >
            <ArrowUpwardIcon style={{height: ".5em"}} />
            <div >{comment.vote}</div>
            <ArrowDownwardIcon  style={{height: ".5em"}}/>
            </div>
          </div>          
          <div className={styles.content}>
          <div style={{paddingLeft:'20px'}} className={styles.replieComments} color="textSecondary" gutterBottom>
          <div>{comment.data.author} {comment.data.score} points </div>
                {comment.data.body}
  
                {replieComments(comment.data.replies)}
  
            </div> 
          </div>
        </div>
      )
    })


    return (
    <Card style={{margin:'20px', border:'1px solid #ccc', paddingTop:'10px',minWidth:'280px'}} className={classes.root}>
       <div className={styles.comments}>Comments</div> 
  {comments}

  </Card>)
} 