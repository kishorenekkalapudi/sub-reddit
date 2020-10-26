import React, { Fragment } from "react";
import {API_URL} from "../../../../src/components/const"
import Layout from "../../../../src/components/r/post_layout"




const MyComponent = (props) => {
  console.log(props);
  return (
   <Fragment>
     <Layout type='comments' {...props}/>
   </Fragment>
)};

export default MyComponent;



export async function getServerSideProps({params, req, res}) {
  console.log(`${API_URL}/r/${params.id}/comments/${params.commentsId.join("/")}.json`)

    const data = await fetch(`${API_URL}/r/${params.id}/comments/${params.commentsId.join("/")}.json`)

    const  comments= await data.json()

    return {
      props: {...comments}
    }
  }


  //https://www.reddit.com/r/nextjs/comments/jh0qzl/nextauthjs_with_mongodb_atlas.json