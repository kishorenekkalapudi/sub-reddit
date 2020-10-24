import React, { Fragment,useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router'



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
});

export default function SimpleCard({sort}) {
 

   const router = useRouter()
   const { id }= router.query
   const path =sort?`${id}/${sort}`:id;

   const [posts,setPosts]=useState([])
   useEffect(()=>{

       fetch(`http://localhost:3000/api/r/${id}/${sort}.json`)
       .then(posts=>posts.json())
       .then((posts=>{
           console.log(posts)
           setPosts(posts.data.children)
       }))

   },[

   ])


  return (
      <Fragment>
          {
              posts.map((post)=>(
                  <Post {...post.data}/>
              ))
          }
      </Fragment>
   
  );
}

const Post=({author, permalink, title,selftext})=>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
    <Card style={{margin:'20px', border:'1px solid #ccc'}} className={classes.root}>

    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>

          Posted byu/{author} 1 month ago

      </Typography>
      <Typography className={classes.links} color="textSecondary" gutterBottom>
        <a  style={{ color:'rgba(0, 0, 0, 0.54)',
    textDecoration: 'none'}} className={classes.link} href={permalink}>{title}</a>
    </Typography>
    <Typography className={classes.pos} nowrap={true} color="textSecondary" gutterBottom>
    {selftext}
    </Typography>
  
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>)
} 
