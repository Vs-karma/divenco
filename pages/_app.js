import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
