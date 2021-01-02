import Head from "next/head";

import Layout from "../layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | The Next Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>The Next Commerce</h1>
    </Layout>
  );
}
