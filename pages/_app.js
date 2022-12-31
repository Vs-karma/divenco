
import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import Home from './Home'
import Footer from '../components/Footer'
import Brand_Page from './Brand_Page'
import Category from './Category'
import Sales from './Sales'
import ProductPage from './ProductPage'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Brand_Page/> */}
      {/* <Category/> */}
      {/* <Sales/> */}
      <ProductPage/>
      {/* <Footer/> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
