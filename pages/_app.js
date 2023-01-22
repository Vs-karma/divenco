import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/global.css";
import ProductPage from "./ProductPage";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <ProductPage />
      <Footer />
    </div>
  );
}

export default MyApp;
