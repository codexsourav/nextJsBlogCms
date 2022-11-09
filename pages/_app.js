import "../styles/globals.css";
import Navbar from "./component/Navbar";
import Fotter from "./component/fotter";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Fotter />
    </>
  );
}

export default MyApp;
