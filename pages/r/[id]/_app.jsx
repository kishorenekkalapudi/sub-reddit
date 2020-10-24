import React  from 'react'
import Head from 'next/head'



import Header from '../../../src/components/header'


export default function App({ Component, pageProps }) {
  return (
      <div>
        <Head>
        <title></title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          />      
          </Head>
        <Header/>
        <Component {...pageProps} />
      </div>      
  )
}