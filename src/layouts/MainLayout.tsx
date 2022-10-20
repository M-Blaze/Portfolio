import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
  title: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio of developer Moulik rai." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <Header />
        <main style={{ overflow: 'hidden' }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
