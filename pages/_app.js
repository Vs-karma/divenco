
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Home from './Home'
import Footer from '../components/Footer'
import Brand_Page from './Brand_Page'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Brand_Page/>
      <Footer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
