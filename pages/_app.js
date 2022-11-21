import "../styles/globals.css";
import "sweetalert2/src/sweetalert2.scss";
import Navbar from "../siteconponent/blogcomponent/Navbar";
import Fotter from "../siteconponent/blogcomponent/fotter";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  let route = useRouter().route;
  let url = route.split("/")[1];

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="G4AC0d-ekH7xUQH31aNC-fa-M09tEuaY73D1zRr9ypU"
        />
      </Head>
      {url != "admin" ? <Navbar /> : null}
      <Component {...pageProps} />
      {url != "admin" ? <Fotter /> : null}
    </>
  );
}

export default MyApp;
