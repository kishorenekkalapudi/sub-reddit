import React, { Fragment } from "react";

import Layout from "../../src/components/common/layout";

import { useRouter } from "next/router";

const MyComponent = (props) => {
  const router = useRouter();

  const { id } = router.query;
  const path = `/user/${id}`;
  return (
    <Fragment>
      <Layout type="user" path={path} {...props} />
    </Fragment>
  );
};

export default MyComponent;

export async function getServerSideProps({ params, req, res }) {
  const about_data = await fetch(
    `https://www.reddit.com/user/${params.id}/about.json`
  );

  const about = await about_data.json();

  let data = {};
  data.about = about.data;

  return {
    props: { ...data },
  };
}
