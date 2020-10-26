import React  from 'react'
import Head from 'next/head'





export default function App({ Component, pageProps }) {
  return (
      <div>
        <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          />      
          </Head>

        <Component {...pageProps} />
      </div>      
  )
}