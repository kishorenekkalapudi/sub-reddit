import React, { Fragment } from "react";
import Nav from "../../../src/components/r/nav"
import Layout from "../../../src/components/common/layout"




const MyComponent = (props) => {
  return (
   <Fragment>
     <Layout {...props}/>
   </Fragment>
)};

export default MyComponent;



export async function getServerSideProps({params, req, res}) {
  console.log("params :"+ JSON.stringify(params,null,4));
  const page_data = await fetch(`https://www.reddit.com/r/${params.id}/about.json`)

    const pages = await page_data.json()

    const data ={}
    data.pages=pages.data;
    return {
      props: {...data}
    }
  }


  