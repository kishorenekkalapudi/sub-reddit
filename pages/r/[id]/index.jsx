import React, { Fragment } from "react";
import Layout from "../../../src/components/common/layout";

import { useRouter } from "next/router";

const MyComponent = (props) => {
  const router = useRouter();
  console.log(router.query);

  const { id } = router.query;
  const path = `/r/${id}`;
  return (
    <Fragment>
      <Layout ptype="subReddit" {...props} />
    </Fragment>
  );
};

export default MyComponent;

export async function getServerSideProps({ params, req, res }) {
  console.log("params :" + JSON.stringify(params, null, 4));
  const about_data = await fetch(
    `https://www.reddit.com/r/${params.id}/about.json`
  );

  const about = await about_data.json();

  const data = {};
  data.about = about.data;
  return {
    props: { ...data },
  };
}
