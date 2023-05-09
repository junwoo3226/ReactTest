import React from 'react'
import Nav from './Nav'
import Head from 'next/head';


const Layout = ({children}) => {
  return (
      <>
          <Head>
              <title>동물</title>
              <meta keyword="동물이름" />
              <meta contents="동물이름" />
          </Head>
          <Nav />
          <div>{children}</div>
      </>
  );
}

export default Layout