import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Divenco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          // integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          // crossorigin="anonymous"
        />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}
        {/* <script src="https://kit.fontawesome.com/389da53d03.js" crossorigin="anonymous"></script> */}
      </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    </>
  )
}

export default Layout